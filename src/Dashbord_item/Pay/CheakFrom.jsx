import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import Secure from "../../Axios/Secure/Secure";
import Itemtan from "../../Axios/Hook/Item/Item";
import { Authcontext } from "../../Provider/ProviderAuth/ProviderAuth";
import Swal from "sweetalert2";



const CheakFrom = () => {
  const {user}=useContext(Authcontext);
    const stripe = useStripe();
    const elements = useElements();
    const [error, seterror] = useState('')
    const [transection,settransection]=useState('')
    const axios= Secure()
    const [item,refetch]= Itemtan();
    const totalprice = item.reduce((total,items)=>total+ items.price,0)
const [clientSecret, setclientSecret] = useState('')
    useEffect(()=>{
      if(totalprice >0){
        axios.post('/create-checkout-session',{discounted_price: totalprice})
      .then(res=>{
        console.log(res.data.clientSecret);
      setclientSecret(res.data.clientSecret)
      })
      }

      
    },[axios,totalprice])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }
          const card = elements.getElement(CardElement);

          if (card == null) {
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
            seterror(error.message)
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            seterror('')
          }

 const {paymentIntent,err}=  await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
          card:card,
          billing_details:{
             email:user?.email || 'anonymus',
             name:user?.name || 'anonymus'
          }
        }
       })
       if(err){
        console.log("error",err);
        
       }
       else{
     if(paymentIntent.status==='succeeded'){
      console.log("paymentIntent",paymentIntent);
      settransection(paymentIntent.id);
      const cardItem={
        email:user?.email,
        price:totalprice,
        transection: paymentIntent.id,
        date: new Date().toISOString(),
        cartid:item.map(items=>items._id),
        dataid:item.map(items=>items.dataid),
        status:"pending"

      }
    const res = await axios.post('/payment',cardItem)
    console.log(res);
    
       if (res.data?.result?.insertedId) {
        refetch();
        Swal.fire({
            title: "Payment Successful!",
            icon: "success",
            confirmButtonText: "OK",
        });
        // navigate("/dashboard/paymenthistory");
    }
     }
        
       }


        };
    
    
    return (
        <form onSubmit={handleSubmit} className="lg:w-1/2 mx-auto mt-24 ">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#FF8C00',
                  '::placeholder': {
                    color: '#D2691E',
                  },
                },
                invalid: {
                  color: '#00FFFF',
                },
              },
            }}
          />
           <button type="submit" className="btn-block btn mt-5 btn-success text-white" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      {transection && <p className="text-green-600">Payment success</p>}
          <p className="text-red-600">{error}</p>
        </form>
      );
};

export default CheakFrom;