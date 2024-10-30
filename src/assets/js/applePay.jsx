
import { Helmet } from "react-helmet";
import { useState, useEffect, useRef } from 'react'
import { clearUpCopyAndPay, generateOptions, useFetch } from './Helpers';



const ApplePay = React.memo((props) => {

    const [checkoutId, setCheckoutId] = useState(null)
    const shippingMethod = useRef(null)

    useEffect(() => {
        useFetch("hyperpay_prepare_checkout")
        .get("").then(res => {
            setCheckoutId(res.data)
            window.wpwlOptions = generateOptions(props, shippingMethod, res.data);
            })

        return clearUpCopyAndPay()

    }, [])


    return (
        <div>
            {checkoutId && <div>
                <form action="" className="paymentWidgets" data-brands={props.setting.brands}></form>
                <Helmet>
                    <script src={`https://eu-test.oppwa.com/v1/paymentWidgets.js?checkoutId=${checkoutId}`}></script>
                </Helmet>
            </div>
            }
        </div>
    )

}, () => true)


export default ApplePay



