import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { cartAddAction } from '../actions/cartAction';
import { loginUser } from '../actions/loginAction';

const BenefitItem = ({ iconUrl, altText, title }) => {
    return (
        <div className="padding-right-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-justify-content flex-justify-content-flex-start ap-container-nowrap">
            <div className="padding-right-mini flex-container flex-align-items-stretch flex-align-content-flex-start">
                <div className="image image-size-custom align-start">
                    <img src={iconUrl} alt={altText} title="Checkmark" style={{ height: '24px', width: '24px' }} />
                </div>
            </div>
            <div className="flex-container flex-align-items-stretch flex-align-content-flex-start ap-container-wrap">
                <div className="text align-start color-squid font-family-ember font-size-small font-weight-regular">{title}</div>
            </div>
        </div>
    );
};

function Home({data}) {

    // // const userDetails = useSelector(state => state.user)
    // // const cart = useSelector(state => state.cart.cart)
    // const firstLogin = localStorage.getItem('myData')
    // const dispatch = useDispatch()
    // console.log("home", data)
    // useEffect(() => {
    //     if (data) {
    //         console.log("home", data.userdetails.cart,data.userdetails)
    //             dispatch(cartAddAction(data.userdetails.cart))
    //             dispatch(loginUser(data.userDetails))
    //     }
    // })
    return (

        <div>
            <section data-sid="content-slot-2">
                <div className="celwidget pf_rd_p-24348504-6905-4c62-b1c8-e65cf8a91830 pf_rd_r-KZVDEMKZ9H4AMFDJAMJQ" cel_widget_id="266329d6-615e-4b15-8846-a6067bc08a35" data-csa-op-log-render="" data-csa-c-content-id="amzn1.sym.24348504-6905-4c62-b1c8-e65cf8a91830" data-csa-c-slot-id="DsUnknown-2" data-csa-c-type="widget" data-csa-c-painter="pharmacy-lego-painter" data-csa-c-id="o6c8n8-r4x7y6-jvl1cv-3m6ht5">
                    <div className="painters_lego-tracking-wrapper">
                        <link href="https://d3216uwaav9lg7.cloudfront.net/assets-AmazonPharmacy.css" rel="stylesheet" />

                        <div className="ap-lego desktop" data-devicetype="desktop">
                            <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width">
                                <div className="background-color-ghost-sage bg-no-repeat padding-left-small padding-right-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%', backgroundImage: 'url("https://images.unsplash.com/photo-1562243061-204550d8a2c9?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
                                    <div className="has-max-width">
                                        <div className="padding-top-xxxlarge padding-bottom-xxxlarge flex-container flex-align-items-stretch flex-align-content-flex-start" style={{ width: '50%' }}>
                                            <div className="padding-bottom-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%', color: "white !important" }}>
                                                <h3 className="heading align-start font-family-ember heading-xxlarge" style={{ color: "white" }}>
                                                    <strong>Save time, save money, stay healthy.</strong>
                                                </h3>
                                            </div>
                                            <div className="padding-bottom-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                <div className="text align-start  font-family-ember font-size-large font-weight-regular" style={{ color: "white" }}>
                                                    Finally, a pharmacy that really delivers.
                                                </div>
                                            </div>
                                            <div className="padding-bottom-xsmall flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                <div>
                                                    <div className="align-start">
                                                        <a href="/register" className="link button button-font-size-large button-type-tertiary" aria-label="Get started">
                                                            Get started
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width margin-bottom-xsmall" style={{ width: '100%' }}>
                                                <a className="link-container popup-link" href="#" data-popup-id="rx_transfer" aria-label="Already sent us a prescription?">
                                                    <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%', color: "white !important" }}>
                                                        <div className="text align-start color-text-teal font-family-ember font-size-small font-weight-regular" style={{ color: "white" }}>
                                                            Already sent us a prescription?
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="links-have-text-color flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                <a className="link-container popup-link" href="#" data-popup-id="privacy_info" aria-label="Health info privacy">
                                                    <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-justify-content flex-justify-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                        <div className="padding-right-xmini flex-container flex-align-items-center flex-align-content-center" style={{ width: '50%' }}>
                                                            <div className="image image-size-custom align-start">
                                                                <img src="" alt="Privacy lock" title="Privacy information" style={{ height: '20px', width: '20px' }} />
                                                            </div>
                                                        </div>
                                                        <div className="flex-container flex-align-items-stretch flex-align-content-flex-start" style={{ width: '50%' }}>
                                                            <div className="text align-start color-squid font-family-ember font-size-xsmall font-weight-regular" style={{ color: "white" }}>
                                                                Your health information is always protected
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <>
                <div className="background-color-ghost-sage padding-left-small padding-right-small padding-bottom-large flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width">
                    <div className="has-max-width">
                        <div className="padding-bottom-base flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width">
                            {/* <hr className="horizontal-rule" /> */}
                        </div>
                        <div></div>
                        <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-justify-content flex-justify-content-space-between flex-full-width ap-container-nowrap">
                            <BenefitItem
                                iconUrl="https://m.media-amazon.com/images/G/01/wg/lp/icons/checkmark-jade.svg"
                                altText="Dark teal-colored checkmark"
                                title="Low prices, with or without insurance"
                            />
                            <BenefitItem
                                iconUrl="https://m.media-amazon.com/images/G/01/wg/lp/icons/checkmark-jade.svg"
                                altText="Dark teal-colored checkmark"
                                title="Automatic refills, delivered to your door"
                            />
                            <BenefitItem
                                iconUrl="https://m.media-amazon.com/images/G/01/wg/lp/icons/checkmark-jade.svg"
                                altText="Dark teal-colored checkmark"
                                title="Pharmacists on call 24/7"
                            />
                            <div className="padding-left-small flex-container flex-align-items-stretch flex-align-content-flex-start">
                                <a className="link-container popup-link" href="#" data-popup-id="benefits" aria-label="See all benefits">
                                    <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width">
                                        <div className="text align-start color-text-teal font-family-ember font-size-small font-weight-regular">See all benefits +</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            <section data-sid="content-slot-3">
                <div className="celwidget pf_rd_p-4da47e4b-cda4-4ca3-bca2-23b43c934ed8 pf_rd_r-KZVDEMKZ9H4AMFDJAMJQ" cel_widget_id="c384150b-1f49-4744-a636-cd88d4054dca" data-csa-op-log-render="" data-csa-c-content-id="amzn1.sym.4da47e4b-cda4-4ca3-bca2-23b43c934ed8" data-csa-c-slot-id="DsUnknown-3" data-csa-c-type="widget" data-csa-c-painter="pharmacy-lego-painter" data-csa-c-id="wfn3b6-1eev3t-8ph13w-65bd3s">
                    <div className="painters_lego-tracking-wrapper">
                        <link href="https://d3216uwaav9lg7.cloudfront.net/assets-AmazonPharmacy.css" rel="stylesheet" />
                        <div className="ap-lego desktop" data-devicetype="desktop">
                            <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                    <div></div>
                                    <div className="background-color-lilac bg-no-repeat padding-left-small padding-right-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%', backgroundImage: "url('https://m.media-amazon.com/images/G/01/wg/lp/Background-Colors/lilac-adjusted._SL1280_FMpng_.png')", backgroundSize: 'cover', backgroundPosition: 'center center' }}>
                                        <div className="has-max-width">
                                            <div className="padding-top-xxlarge padding-bottom-xxlarge flex-container flex-align-items-center flex-align-content-center" style={{ width: '50%' }}>
                                                <div className="padding-bottom-mini flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                    <h3 className="heading align-start color-squid font-family-ember heading-xlarge"><strong>More ways to spend less</strong></h3>
                                                </div>
                                                <div className="padding-right-xlarge padding-bottom-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                    <div className="text align-start color-squid font-family-ember font-size-medium font-weight-regular">From coupons to Prime member savings, we work hard to find you low prices.</div>
                                                </div>
                                                <BenefitItem
                                                    iconUrl="https://m.media-amazon.com/images/G/01/wg/lp/icons/checkmark-jade.svg"
                                                    altText="Dark teal-colored checkmark"
                                                    title="Prime members save up to 80%*"
                                                />
                                                <BenefitItem
                                                    iconUrl="https://m.media-amazon.com/images/G/01/wg/lp/icons/checkmark-jade.svg"
                                                    altText="Dark teal-colored checkmark"
                                                    title="Subscribe to RxPass to get all eligible meds for $5 a month**"
                                                />
                                                <BenefitItem
                                                    iconUrl="https://m.media-amazon.com/images/G/01/wg/lp/icons/checkmark-jade.svg"
                                                    altText="Dark teal-colored checkmark"
                                                    title="Save with coupons on brand-name meds"
                                                />
                                                <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width">
                                                    <div className="align-start">
                                                        <a href="/product" className="link button button-font-size-regular button-type-primary" aria-label="Explore all the ways to save">Explore all the ways to save</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <script src="https://d3216uwaav9lg7.cloudfront.net/assets-AmazonPharmacy.js" type="text/javascript"></script>
                </div>
            </section>
            <section data-sid="content-slot-4">
                <div className="celwidget pf_rd_p-069ffd29-5813-43ea-b31c-6a152e575a89 pf_rd_r-KZVDEMKZ9H4AMFDJAMJQ" cel_widget_id="1016017b-bb19-49ba-9723-9aa03d7f2fe3" data-csa-op-log-render="" data-csa-c-content-id="amzn1.sym.069ffd29-5813-43ea-b31c-6a152e575a89" data-csa-c-slot-id="DsUnknown-4" data-csa-c-type="widget" data-csa-c-painter="pharmacy-lego-painter" data-csa-c-id="f27u67-9fteyl-hunr1j-3p3rj7">
                    <div className="painters_lego-tracking-wrapper">
                        <link href="https://d3216uwaav9lg7.cloudfront.net/assets-AmazonPharmacy.css" rel="stylesheet" />
                        <div className="ap-lego desktop" data-devicetype="desktop">
                            <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                    <div></div>
                                    <div className="bg-no-repeat padding-left-small padding-right-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%', backgroundImage: "url('https://m.media-amazon.com/images/G/01/wg/lp/LEGO-LP/Storefont_v2/Home/vapor._SL1280_FMpng_.png')", backgroundSize: 'cover', backgroundPosition: 'center center' }}>
                                        <div className="has-max-width">
                                            <div className="padding-right-xxlarge flex-container flex-align-items-flex-end flex-align-content-flex-end" style={{ width: '50%' }}>
                                                <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                    <div className="spacer"></div>
                                                </div>
                                                <div className="padding-right-xxlarge padding-top-small flex-container flex-align-items-flex-end flex-align-content-flex-end flex-full-width" style={{ width: '100%' }}>
                                                    <div className="image image-size-fit align-center">
                                                        <img src="https://m.media-amazon.com/images/G/01/wg/lp/LEGO-LP/Storefont_v2/Home/insurance-hand-2x.png" alt="Hand holding insurance card" title="Insurance accepted" data-src="https://m.media-amazon.com/images/G/01/wg/lp/LEGO-LP/Storefont_v2/Home/insurance-hand-2x.png" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="padding-top-xxlarge padding-bottom-xxlarge flex-container flex-align-items-center flex-align-content-center" style={{ width: '50%' }}>
                                                <div className="padding-bottom-mini flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                    <h3 className="heading align-start color-squid font-family-ember heading-xlarge"><strong>Most insurance plans accepted</strong></h3>
                                                </div>
                                                <div className="padding-right-xlarge padding-bottom-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                    <div className="text align-start color-squid font-family-ember font-size-medium font-weight-regular">We calculate your copay automatically, so you never have to wonder what’s covered.</div>
                                                </div>
                                                <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                    <div className="align-start">
                                                        <a href="/login" className="link button button-font-size-regular button-type-tertiary" aria-label="Sign up to add your insurance">Sign up to add your insurance</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section data-sid="content-slot-5">
                            <div className="celwidget pf_rd_p-d9f04352-defe-42f2-8f8a-09106738e627 pf_rd_r-KZVDEMKZ9H4AMFDJAMJQ" cel_widget_id="1fa1ade8-d65a-4220-9990-0cad1a01d9b9" data-csa-op-log-render="" data-csa-c-content-id="amzn1.sym.d9f04352-defe-42f2-8f8a-09106738e627" data-csa-c-slot-id="DsUnknown-5" data-csa-c-type="widget" data-csa-c-painter="pharmacy-lego-painter" data-csa-c-id="bhapmh-bg28b7-9mahnz-93iic6">
                                <div className="painters_lego-tracking-wrapper">
                                    <link href="https://d3216uwaav9lg7.cloudfront.net/assets-AmazonPharmacy.css" rel="stylesheet" />
                                    <div className="ap-lego desktop" data-devicetype="desktop">
                                        <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                            <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                <div className="bg-no-repeat padding-left-small padding-right-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%', backgroundImage: "url('https://m.media-amazon.com/images/G/01/wg/lp/Background-Colors/seashell._SL1280_FMpng_.png')", backgroundSize: 'cover', backgroundPosition: 'center center' }}>
                                                    <div className="has-max-width">
                                                        <div className="padding-top-xxlarge padding-bottom-xxlarge flex-container flex-align-items-center flex-align-content-center" style={{ width: '50%' }}>
                                                            <div className="padding-bottom-mini flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                                <h3 className="heading align-start color-squid font-family-ember heading-xlarge"><strong>Goodbye, pharmacy line</strong></h3>
                                                            </div>
                                                            <div className="padding-right-xlarge padding-bottom-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                                <div className="text align-start color-squid font-family-ember font-size-medium font-weight-regular">We deliver your medication right to your door, with status updates along the way.</div>
                                                            </div>
                                                            <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                                <div className="align-start">
                                                                    <a href="/register" className="link button button-font-size-regular button-type-tertiary" aria-label="Get started">Get started</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                                <script src="https://d3216uwaav9lg7.cloudfront.net/assets-AmazonPharmacy.js" type="text/javascript"></script>
                            </div>
                        </section>
                        <section data-sid="content-slot-6">
                            <div className="celwidget pf_rd_p-541c3c56-dd4d-43ce-ba8c-80f434ced1a5 pf_rd_r-KZVDEMKZ9H4AMFDJAMJQ" cel_widget_id="e3614f12-bf51-4108-9d57-90c5e13aec09" data-csa-op-log-render="" data-csa-c-content-id="amzn1.sym.541c3c56-dd4d-43ce-ba8c-80f434ced1a5" data-csa-c-slot-id="DsUnknown-6" data-csa-c-type="widget" data-csa-c-painter="pharmacy-lego-painter" data-csa-c-id="gu8hoi-to24to-2v66d4-h16y0r">
                                <div className="painters_lego-tracking-wrapper">
                                    <link href="https://d3216uwaav9lg7.cloudfront.net/assets-AmazonPharmacy.css" rel="stylesheet" />
                                    <div className="ap-lego desktop" data-devicetype="desktop">
                                        <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                            <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                <div className="background-color-ghost-sage padding-left-small padding-right-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                    <div className="has-max-width">
                                                        <div className="padding-right-xxlarge flex-container flex-align-items-flex-end flex-align-content-flex-end" style={{ width: '50%' }}>
                                                            <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                                <div className="spacer"></div>
                                                            </div>
                                                            <div className="padding-top-small flex-container flex-align-items-flex-end flex-align-content-flex-end flex-full-width" style={{ width: '100%' }}>
                                                                <div className="image image-size-fit align-center">
                                                                    <img src="https://m.media-amazon.com/images/G/01/wg/lp/LEGO-LP/Storefont_v2/Home/pharmacist_with_bottle_2x.png" alt="Hand holding insurance card" title="Insurance accepted" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="padding-top-xxlarge padding-bottom-xxlarge flex-container flex-align-items-center flex-align-content-center" style={{ width: '50%' }}>
                                                            <div className="padding-bottom-mini flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                                <h3 className="heading align-start color-squid font-family-ember heading-xlarge">
                                                                    <strong>We’re here for you</strong>
                                                                </h3>
                                                            </div>
                                                            <div className="padding-right-xlarge padding-bottom-base flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                                <div className="text align-start color-squid font-family-ember font-size-medium font-weight-regular">Our U.S.-licensed pharmacists check every order before it goes out. Have a question for them? Reach out anytime, day or night.</div>
                                                            </div>
                                                            <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-justify-content flex-justify-content-flex-start flex-full-width ap-container-nowrap" style={{ width: '100%' }}>
                                                                <div className="background-color-white border-radius-10px padding-left-mini padding-right-mini padding-top-mini padding-bottom-mini flex-container flex-align-items-stretch flex-align-content-flex-start margin-right-xmini" style={{ width: '41.666666666666664%' }}>
                                                                    <a className="link" href="https://accreditnet.urac.org/directory/#/accreditation/MSP007604/info" data-open-external-mshop="true" aria-label="URAC accreditation">
                                                                        <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-justify-content flex-justify-content-center flex-full-width" style={{ width: '100%' }}>
                                                                            <div className="image image-size-custom align-start">
                                                                                <img src="" alt="URAC Accredited Mail Service Pharmacy 01/01/2024 badge" title="URAC accreditation" style={{ height: '100px', width: 'auto' }} />
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="background-color-white border-radius-10px padding-left-mini padding-right-mini padding-top-mini padding-bottom-mini flex-container flex-align-items-stretch flex-align-content-flex-start margin-left-xmini" style={{ width: '58.333333333333336%' }}>
                                                                    <a className="link" href="https://app.us.openbadges.me/view/#!/badge?badgeid=e96e5e19-00e7-4311-b113-a69a1492e90d" data-open-external-mshop="true" aria-label="NABP accreditation">
                                                                        <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-justify-content flex-justify-content-center flex-full-width" style={{ width: '100%' }}>
                                                                            <div className="image image-size-custom align-start">
                                                                                <img src="" alt="NABP Accredited Digital Pharmacy badge" title="NABP accreditation" style={{ height: '100px', width: 'auto' }} />
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div></div>

                                            <section data-sid="content-slot-7">
                                                <div className="celwidget pf_rd_p-e582e746-309f-494a-b8ae-c1471b5e1d36 pf_rd_r-KZVDEMKZ9H4AMFDJAMJQ" cel_widget_id="733e1e61-5b76-437f-8b2d-5e4513e2c1a6" data-csa-op-log-render="" data-csa-c-content-id="amzn1.sym.e582e746-309f-494a-b8ae-c1471b5e1d36" data-csa-c-slot-id="DsUnknown-7" data-csa-c-type="widget" data-csa-c-painter="pharmacy-lego-painter" data-csa-c-id="nlxvib-m027v2-nj8azg-7nwwld">
                                                    <div className="painters_lego-tracking-wrapper">
                                                        <link href="https://d3216uwaav9lg7.cloudfront.net/assets-AmazonPharmacy.css" rel="stylesheet" />
                                                        <div className="ap-lego desktop" data-devicetype="desktop">
                                                            <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                                <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                                    <div className="padding-left-small padding-right-small padding-top-xlarge padding-bottom-xxlarge flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                                        <div className="has-max-width">
                                                                            <div className="padding-bottom-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                                                <h3 className="heading align-center color-squid font-family-ember heading-xlarge">
                                                                                    <strong>How it works</strong>
                                                                                </h3>
                                                                            </div>
                                                                            <div className="padding-bottom-base flex-container flex-align-items-stretch flex-align-content-flex-start flex-justify-content flex-justify-content-center flex-full-width" style={{ width: '100%' }}>

                                                                            </div>
                                                                            <div className="padding-bottom-xlarge flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                                                <div className="has-max-width">
                                                                                    <div className="padding-left-small padding-right-mini flex-container flex-align-items-stretch flex-align-content-flex-start" style={{ width: '33.333333333333336%' }}>
                                                                                        <div className="padding-bottom-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                                                            <div className="image image-size-fit align-center">
                                                                                                <img src="" alt="Illustration of user sign up within a smartphone screen" title="Sign up illustration" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="padding-left-small padding-right-small padding-bottom-xmini flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width ap-container-wrap" style={{ width: '100%' }}>
                                                                                            <h3 className="heading align-center color-squid font-family-ember heading-xsmall">
                                                                                                <strong>1. Sign up for Medplus Online Pharmacy</strong>
                                                                                            </h3>
                                                                                        </div>
                                                                                        <div className="padding-left-small padding-right-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width ap-container-wrap" style={{ width: '100%' }}>
                                                                                            <div className="text align-center color-squid font-family-ember font-size-xsmall font-weight-regular links-have-text-color">It’s simple. And free, always.<br /><a href="/dashboard?ref_=sf2_hiw1">Sign in or sign up</a> to get started.</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="padding-left-mini padding-right-mini flex-container flex-align-items-stretch flex-align-content-flex-start" style={{ width: '33.333333333333336%' }}>
                                                                                        <div className="padding-bottom-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                                                            <div className="image image-size-fit align-center">
                                                                                                <img src="" alt="Illustration of doctors with Rx prescription" title="Rx illustration" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="padding-left-small padding-right-small padding-bottom-xmini flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width ap-container-wrap" style={{ width: '100%' }}>
                                                                                            <h3 className="heading align-center color-squid font-family-ember heading-xsmall">
                                                                                                <strong>2. We’ll get your prescription</strong>
                                                                                            </h3>
                                                                                        </div>
                                                                                        <div className="padding-left-small padding-right-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width ap-container-wrap" style={{ width: '100%' }}>
                                                                                            <div className="text align-center color-squid font-family-ember font-size-xsmall font-weight-regular links-have-text-color">We can work with your insurance and current pharmacy to get your prescription.</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="padding-left-mini padding-right-small flex-container flex-align-items-stretch flex-align-content-flex-start" style={{ width: '33.333333333333336%' }}>
                                                                                        <div className="padding-bottom-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                                                            <div className="image image-size-fit align-center">
                                                                                                <img src="" alt="Illustration of box delivered" title="Prescription delivered illustration" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="padding-left-small padding-right-small padding-bottom-xmini flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width ap-container-wrap" style={{ width: '100%' }}>
                                                                                            <h3 className="heading align-center color-squid font-family-ember heading-xsmall">
                                                                                                <strong>3. Get your meds delivered</strong>
                                                                                            </h3>
                                                                                        </div>
                                                                                        <div className="padding-left-small padding-right-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width ap-container-wrap" style={{ width: '100%' }}>
                                                                                            <div className="text align-center color-squid font-family-ember font-size-xsmall font-weight-regular links-have-text-color">Have a question? Our pharmacists are available 24/7.</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                                            <div className="align-center">
                                                                                <a href="/register" className="link button button-font-size-regular button-type-primary" aria-label="Learn more about how it works">Learn more about how it works</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <script src="https://d3216uwaav9lg7.cloudfront.net/assets-AmazonPharmacy.js" type="text/javascript"></script>
                                                </div>
                                            </section>

                                        </div>
                                    </div>
                                </div>
                                <script src="https://d3216uwaav9lg7.cloudfront.net/assets-AmazonPharmacy.js" type="text/javascript"></script>
                            </div>
                        </section>
                    </div>
                    <script src="https://d3216uwaav9lg7.cloudfront.net/assets-AmazonPharmacy.js" type="text/javascript"></script>
                </div>
            </section>
            <section data-sid="content-slot-9">
                <div className="celwidget pf_rd_p-ef50a022-0def-4077-9a5a-69313510425d pf_rd_r-KZVDEMKZ9H4AMFDJAMJQ" cel_widget_id="ab700a1d-e9b3-4f31-807d-163b5354f3f2" data-csa-op-log-render="" data-csa-c-content-id="amzn1.sym.ef50a022-0def-4077-9a5a-69313510425d" data-csa-c-slot-id="DsUnknown-9" data-csa-c-type="widget" data-csa-c-painter="pharmacy-lego-painter" data-csa-c-id="z2cmvu-sk0i8u-umr9jn-4739xr">
                    <div className="painters_lego-tracking-wrapper">
                        <link href="https://d3216uwaav9lg7.cloudfront.net/assets-AmazonPharmacy.css" rel="stylesheet" />
                        <div className="ap-lego desktop" data-devicetype="desktop">
                            <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                <div className="background-color-luna padding-top-xxlarge padding-bottom-xxlarge flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                    <div className="padding-left-small padding-right-small padding-bottom-base flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                        <h3 className="heading align-center color-squid font-family-ember heading-xlarge">
                                            <strong>What customers are saying</strong>
                                        </h3>
                                    </div>
                                    <div className="padding-left-xxlarge padding-right-xxlarge flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width ap-container-nowrap" style={{ width: '100%' }}>
                                        <div className="background-color-white border-color-nickel border-radius-10px padding-left-small padding-right-small padding-top-small padding-bottom-small border-left-1px border-right-1px border-top-1px border-bottom-1px flex-container flex-align-items-stretch flex-align-content-flex-start ap-container-wrap margin-left-xmini margin-right-xmini" style={{ width: '25%' }}>
                                            <div className="padding-bottom-xsmall flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                <div className="image image-size-custom align-center">
                                                    <img src="" alt="5 star rating" title="Star ratings" style={{ height: '24px', width: 'auto' }} />
                                                </div>
                                            </div>
                                            <div className="padding-bottom-xsmall flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                <div className="text align-center color-squid font-family-ember font-size-small font-weight-regular">
                                                    <strong>“Fewer trips to the pharmacy and more reliable service than I was getting with my old pharmacy”</strong>
                                                </div>
                                            </div>
                                            <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                <div className="text align-center color-thunder font-family-ember font-size-xsmall font-weight-regular">– Anita F, Amazon Pharmacy customer</div>
                                            </div>
                                        </div>
                                        <div className="background-color-white border-color-nickel border-radius-10px padding-left-small padding-right-small padding-top-small padding-bottom-small border-left-1px border-right-1px border-top-1px border-bottom-1px flex-container flex-align-items-stretch flex-align-content-flex-start ap-container-wrap margin-left-xmini margin-right-xmini" style={{ width: '25%' }}>
                                            <div className="padding-bottom-xsmall flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                <div className="image image-size-custom align-center">
                                                    <img src="" alt="5 star rating" title="Star ratings" style={{ height: '24px', width: 'auto' }} />
                                                </div>
                                            </div>
                                            <div className="padding-bottom-xsmall flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                <div className="text align-center color-squid font-family-ember font-size-small font-weight-bold">
                                                    “Ordering from Amazon is so simple. I don't have to wait in line, and when I order it shows up at the door.”
                                                </div>
                                            </div>
                                            <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                <div className="text align-center color-thunder font-family-ember font-size-xsmall font-weight-regular">– Louis D, Amazon Pharmacy customer</div>
                                            </div>
                                        </div>
                                        <div className="background-color-white border-color-nickel border-radius-10px padding-left-small padding-right-small padding-top-small padding-bottom-small border-left-1px border-right-1px border-top-1px border-bottom-1px flex-container flex-align-items-stretch flex-align-content-flex-start ap-container-wrap margin-left-xmini margin-right-xmini" style={{ width: '25%' }}>
                                            <div className="padding-bottom-xsmall flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                <div className="image image-size-custom align-center">
                                                    <img src="" alt="5 star rating" title="Star ratings" style={{ height: '24px', width: 'auto' }} />
                                                </div>
                                            </div>
                                            <div className="padding-bottom-xsmall flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                <div className="text align-center color-squid font-family-ember font-size-small font-weight-bold">
                                                    “I don't have to follow up with my doctor's office for refills anymore. Amazon Pharmacy handles everything.”
                                                </div>
                                            </div>
                                            <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                <div className="text align-center color-thunder font-family-ember font-size-xsmall font-weight-regular">– Meredith M, Amazon Pharmacy customer</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <script src="https://d3216uwaav9lg7.cloudfront.net/assets-AmazonPharmacy.js" type="text/javascript"></script>
            </section>

            <section data-sid="content-slot-10">
                <div className="celwidget pf_rd_p-9cc27b78-a621-4696-ab36-a42ab63adaf4 pf_rd_r-KZVDEMKZ9H4AMFDJAMJQ" cel_widget_id="72a66788-7581-475e-b1bf-b20b1119a258" data-csa-op-log-render="" data-csa-c-content-id="amzn1.sym.9cc27b78-a621-4696-ab36-a42ab63adaf4" data-csa-c-slot-id="DsUnknown-10" data-csa-c-type="widget" data-csa-c-painter="pharmacy-lego-painter" data-csa-c-id="peiw7g-7r9uub-9gbzk6-dxflzt">
                    <div className="painters_lego-tracking-wrapper">
                        <link href="https://d3216uwaav9lg7.cloudfront.net/assets-AmazonPharmacy.css" rel="stylesheet" />
                        <div className="ap-lego desktop" data-devicetype="desktop">
                            <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                <div className="background-color-sage padding-top-xlarge padding-bottom-xxlarge flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                    <div className="padding-left-small padding-right-small padding-bottom-mini flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                        <h2 className="heading align-center color-squid font-family-ember heading-xlarge">
                                            <strong>More to explore</strong>
                                        </h2>
                                    </div>
                                    <div className="padding-left-small padding-right-small padding-bottom-base flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                        <div className="text align-center color-squid font-family-ember font-size-medium font-weight-regular">Explore even more ways to save money and stay healthy with MedPlus online Pharmacy.</div>
                                    </div>
                                    <div className="padding-left-xxlarge padding-right-xxlarge flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width ap-container-nowrap" style={{ width: '100%' }}>
                                        <div className="background-color-white border-color-nickel border-radius-10px border-left-1px border-right-1px border-top-1px border-bottom-1px flex-container flex-align-items-stretch flex-align-content-flex-start ap-container-wrap ap-container-direction-column margin-left-xmini margin-right-xmini" style={{ width: '25%' }}>
                                            <a className="link-container" href="rxpass?ref_=sf2_rxpass2" aria-label="Introducing RxPass">
                                                <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                    <div className="image image-size-fit align-start">
                                                        <img src="" alt="Illustration of a receipt within a smartphone screen showing three medications for a total price of $5" title="RxPass illustration" />
                                                    </div>
                                                </div>
                                                <div className="padding-left-small padding-right-small padding-top-small padding-bottom-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width ap-container-wrap" style={{ width: '100%' }}>
                                                    <div className="padding-bottom-xmini flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width ap-container-wrap" style={{ width: '100%' }}>
                                                        <div className="text align-center color-squid font-family-ember font-size-small font-weight-bold">Meds for $5 a month</div>
                                                    </div>
                                                    <div className="padding-bottom-xsmall flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width ap-container-wrap" style={{ width: '100%' }}>
                                                        <div className="text align-center color-squid font-family-ember font-size-small font-weight-regular">Prime members, get the meds you’re prescribed for one low price.**</div>
                                                    </div>
                                                    <div className="flex-container flex-align-items-flex-end flex-align-content-flex-end flex-full-width ap-container-wrap" style={{ width: '100%' }}>
                                                        <div className="text align-center color-pharmacy-teal font-family-ember font-size-small font-weight-bold">Introducing RxPass ›</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="background-color-white border-color-nickel border-radius-10px border-left-1px border-right-1px border-top-1px border-bottom-1px flex-container flex-align-items-stretch flex-align-content-flex-start ap-container-wrap ap-container-direction-column margin-left-xmini margin-right-xmini" style={{ width: '25%' }}>
                                            <a className="link-container" href="coupons?ref_=sf2_coupons2" aria-label="Find coupon savings">
                                                <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                    <div className="image image-size-fit align-start">
                                                        <img src="" alt="Phone screen showing coupon discounts on medication" title="Coupon savings" />
                                                    </div>
                                                </div>
                                                <div className="padding-left-small padding-right-small padding-top-small padding-bottom-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width ap-container-wrap" style={{ width: '100%' }}>
                                                    <div className="padding-bottom-xmini flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width ap-container-wrap" style={{ width: '100%' }}>
                                                        <div className="text align-center color-squid font-family-ember font-size-small font-weight-bold">Save with coupons</div>
                                                    </div>
                                                    <div className="padding-bottom-xsmall flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width ap-container-wrap" style={{ width: '100%' }}>
                                                        <div className="text align-center color-squid font-family-ember font-size-small font-weight-regular">We make it easy to find manufacturer coupons for brand-name medications.</div>
                                                    </div>
                                                    <div className="flex-container flex-align-items-flex-end flex-align-content-flex-end flex-full-width ap-container-wrap" style={{ width: '100%' }}>
                                                        <div className="text align-center color-pharmacy-teal font-family-ember font-size-small font-weight-bold">Find coupon savings ›</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="background-color-white border-color-nickel border-radius-10px border-left-1px border-right-1px border-top-1px border-bottom-1px flex-container flex-align-items-stretch flex-align-content-flex-start ap-container-wrap ap-container-direction-column margin-left-xmini margin-right-xmini" style={{ width: '25%' }}>
                                            <a className="link-container" href="pillpack?ref_=sf2_pillpack" aria-label="Learn more about PillPack">
                                                <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                    <div className="image image-size-fit align-start">
                                                        <img src="" alt="Three PillPack packets " title="PillPack " />
                                                    </div>
                                                </div>
                                                <div className="padding-left-small padding-right-small padding-top-small padding-bottom-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width ap-container-wrap" style={{ width: '100%' }}>
                                                    <div className="padding-bottom-xmini flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width ap-container-wrap" style={{ width: '100%' }}>
                                                        <div className="text align-center color-squid font-family-ember font-size-small font-weight-bold">Prefer your meds in packets?</div>
                                                    </div>
                                                    <div className="padding-bottom-xsmall flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width ap-container-wrap" style={{ width: '100%' }}>
                                                        <div className="text align-center color-squid font-family-ember font-size-small font-weight-regular">PillPack by Amazon Pharmacy will sort your meds by date and time.</div>
                                                    </div>
                                                    <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width ap-container-wrap" style={{ width: '100%' }}>
                                                        <div className="text align-center color-pharmacy-teal font-family-ember font-size-small font-weight-bold">Learn more about PillPack ›</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="background-color-white border-color-nickel border-radius-10px border-left-1px border-right-1px border-top-1px border-bottom-1px flex-container flex-align-items-stretch flex-align-content-flex-start ap-container-wrap ap-container-direction-column margin-left-xmini margin-right-xmini" style={{ width: '25%' }}>
                                            <a className="link-container" href="https://clinic.amazon.com?ref_=sf2_clinic" aria-label="Learn more about Amazon Clinic">
                                                <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                                    <div className="image image-size-fit align-start">
                                                        <img src="" alt="Smartphone screen showing video and messaging with a clinician via Amazon Clinic" title="Amazon Clinic" />
                                                    </div>
                                                </div>
                                                <div className="padding-left-small padding-right-small padding-top-small padding-bottom-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width ap-container-wrap" style={{ width: '100%' }}>
                                                    <div className="padding-bottom-xmini flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width ap-container-wrap" style={{ width: '100%' }}>
                                                        <div className="text align-center color-squid font-family-ember font-size-small font-weight-bold">Quickly treat common health conditions</div>
                                                    </div>
                                                    <div className="padding-bottom-xsmall flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width ap-container-wrap" style={{ width: '100%' }}>
                                                        <div className="text align-center color-squid font-family-ember font-size-small font-weight-regular">Connect with an online clinician for fast and easy treatment.</div>
                                                    </div>
                                                    <div className="flex-container flex-align-items-flex-end flex-align-content-flex-end flex-full-width ap-container-wrap" style={{ width: '100%' }}>
                                                        <div className="text align-center color-pharmacy-teal font-family-ember font-size-small font-weight-bold">Learn more about Medplus Clinic ›</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <script src="https://d3216uwaav9lg7.cloudfront.net/assets-AmazonPharmacy.js" type="text/javascript"></script>
                    </div>
                </div>
            </section>
            <section data-sid="content-slot-13">
                <div className="celwidget pf_rd_p-7cd283d7-6dbd-436b-ba84-b3e3079c8d0b pf_rd_r-KZVDEMKZ9H4AMFDJAMJQ" cel_widget_id="cb5ae6a5-1896-4061-b12d-8379e46b0304" data-csa-op-log-render="" data-csa-c-content-id="amzn1.sym.7cd283d7-6dbd-436b-ba84-b3e3079c8d0b" data-csa-c-slot-id="DsUnknown-13" data-csa-c-type="widget" data-csa-c-painter="pharmacy-lego-painter" data-csa-c-id="9tggr9-rcmucp-5fsh97-qufg9x">
                    <div className="painters_lego-tracking-wrapper">
                        <link href="https://d3216uwaav9lg7.cloudfront.net/assets-AmazonPharmacy.css" rel="stylesheet" />
                        <div className="ap-lego desktop" data-devicetype="desktop">
                            <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                <div className="background-color-pharmacy-teal bg-no-repeat padding-left-small padding-right-small padding-top-large padding-bottom-large flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%', backgroundImage: 'url()', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
                                    <div className="has-max-width">
                                        <div className="padding-bottom-small flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                            <h2 className="heading align-center color-white font-family-ember heading-medium">
                                                <strong>Your medication, delivered.</strong>
                                            </h2>
                                        </div>
                                        <div className="flex-container flex-align-items-stretch flex-align-content-flex-start flex-full-width" style={{ width: '100%' }}>
                                            <div className="">
                                                <div className="align-center">
                                                    <a href="/register" className="link button button-font-size-large button-type-tertiary" aria-label="get started">
                                                        Get started
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <script src="https://d3216uwaav9lg7.cloudfront.net/assets-AmazonPharmacy.js" type="text/javascript"></script>
                    </div>
                </div>
            </section>

            {/* <Blogs /> */}
        </div>
    )
}

export default Home

