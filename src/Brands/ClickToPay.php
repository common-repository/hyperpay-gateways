<?php
namespace Hyperpay\Gateways\Brands;

use Hyperpay\Gateways\App\DefaultGateway;
use Hyperpay\Gateways\Main;
use WC_Order;


class ClickToPay extends DefaultGateway 
{
    public $trans_mode = 'EXTERNAL';

    /**
     * should be lower case and unique
     * @var string $id 
     */
    public $id = 'hyperpay_clicktopay';
    
    /**
     * The title which appear next to gateway on setting page 
     * @var string $method_title
     */
    public $method_title = 'Click To Pay Gateway';

    /**
     * Description of gateways which will appear next to title
     * @var string $method_description
     */
    public $method_description = 'Click To Pay Plugin for Woocommerce';

    /**
     * 
     * the Brands supported by the gateway
     * @var array $supported_brands
     */
    protected $supported_brands = [
        'MASTER' => 'Master Card',
        'VISA' => 'Visa',
        'AMEX' => 'American Express',
        'JCB' => 'Japan Credit Bureau',
        'CLICK_TO_PAY' => 'Click to pay',
    ];

    public function __construct()
    {
        parent::__construct();
        $this->blackBins = require_once(Main::ROOT_PATH . '/App/blackBins.php');
        $this->brands = \array_keys($this->supported_brands);
        unset($this->form_fields['hyper_pay_brands']);
    }

    public function renderPaymentForm(WC_Order $order, $result)
    {
        parent::renderPaymentForm($order,$result);
        wp_enqueue_script('CLICK_TO_PAY_JS',  HYPERPAY_PLUGIN_DIR . '/src/assets/js/click_to_pay.js', ['jquery'], false, true);
        wp_localize_script('CLICK_TO_PAY_JS', 'dataObj_click_to_pay', ["email" => $order->get_billing_email()]);
    }

    public function iconSrc()
    {
            $img =  HYPERPAY_PLUGIN_DIR .  '/src/assets/images/default.png';
            if (file_exists(Main::ROOT_PATH . '/assets/images/click-to-pay.png'))
                $img = HYPERPAY_PLUGIN_DIR . '/src/assets/images/click-to-pay.png';
        
        return [$img];
    }


}
