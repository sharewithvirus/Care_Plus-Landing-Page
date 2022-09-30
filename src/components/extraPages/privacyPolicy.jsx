import React, { useState } from "react";
import { Interweave } from "interweave";

const PrivacyPolicy = () => {
  const [view, setView] = useState(``);

  return (
    <>
      <div className="row mt-5 m-2" id="about">
        <div className="col-md-12 p-5 mt-md-10 ">
          <div className="row d-flex align-items-centers">
            <div className="col d-flex align-items-center justify-content-center">
              <div
                className="me-3"
                style={{
                  width: "25%",
                  height: "10px",
                  backgroundColor: "#000",
                  borderRadius: "10px",
                }}
              ></div>
              <div className="">
                <h1
                  style={{
                    color: "#000000",
                    textAlign: "center",
                    // marginTop: "20%",
                  }}
                >
                  Privacy Policy
                </h1>
              </div>
              <div
                className="ms-3"
                style={{
                  width: "25%",
                  height: "10px",
                  backgroundColor: "#000",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </div>
          <div>
            <>
              {/* <h1 className="c50" id="h.72s5fg5opyai">
                <span className="c15 c18 c33">PRIVACY NOTICE</span>
              </h1> */}
              <p className="c20">
                <span className="c22 c18 c43 c52" />
              </p>
              <p className="c72">
                <span className="c1">Last Updated on September 25, 2022</span>
              </p>
              <p className="c46 c71">
                <span className="c6" />
              </p>
              <p className="c46">
                <span className="c6">
                  This privacy notice for Fastkart store (Care Plus App)
                  ("Company," "we," "us," or "our"), describes how and why we
                  might collect, store, use, and/or share ("process") your
                  information when you use our services ("Services"), such as
                  when you:
                </span>
              </p>
              <p className="c26">
                <span className="c21">
                  Questions or concerns? Reading this privacy notice will help
                  you understand your privacy rights and choices. If you do not
                  agree with our policies and practices, please do not use our
                  Services. If you still have any questions or concerns, please
                  contact us at{" "}
                </span>
                <span className="c35 c36">careplusbusiness@gmail.com</span>
                <span className="c6">.</span>
              </p>
              <p className="c58">
                <span className="c35">&nbsp; &nbsp; &nbsp;</span>
                <span className="c16 c19">SUMMARY OF KEY POINTS</span>
              </p>
              <p className="c27">
                <span className="c25">This summary provides </span>
                <span className="c21">key </span>
                <span className="c25">points from our privacy </span>
                <span className="c21">notice, </span>
                <span className="c25">but you can find out more </span>
                <span className="c21">details </span>
                <span className="c25">about any </span>
                <span className="c21">of these topics </span>
                <span className="c25">by clicking </span>
                <span className="c21">the </span>
                <span className="c25">link </span>
                <span className="c21">to/low/ng </span>
                <span className="c25">each </span>
                <span className="c21">point </span>
                <span className="c25">or by using our table of </span>
                <span className="c21">contents below </span>
                <span className="c25">to find </span>
                <span className="c21">the section you are </span>
                <span className="c25 c48 c43">looking for.</span>
              </p>
              <p className="c27">
                <span className="c6">
                  What personal information do we process? When you visit, use,
                  or navigate our Services, we may process personal information
                  depending on how you interact with
                </span>
              </p>
              <p className="c62">
                <span className="c6">
                  Application and the Services, the choices you make, and the
                  products and features you use.
                </span>
              </p>
              <p className="c62">
                <span className="c6">
                  Do we process any sensitive personal information? We do not
                  process sensitive personal information.
                </span>
              </p>
              <p className="c14">
                <span className="c6">
                  Do we receive any information from third parties? We may
                  receive information from public databases, marketing partners,
                  social media platforms, and other outside sources.
                </span>
              </p>
              <p className="c14">
                <span className="c6">
                  How do we process your information? We process your
                  information to provide, improve, and administer our Services,
                  communicate with you, for security and fraud prevention, and
                  comply with the law. We may also process your information for
                  other purposes with your consent. We process your information
                  only when we have a valid legal reason to do so.
                </span>
              </p>
              <p className="c14">
                <span className="c6">
                  In what situations and with which parties do we share personal
                  information? We may share information in specific situations
                  and with specific third parties.
                </span>
              </p>
              <p className="c14">
                <span className="c6">
                  What are your rights? Depending on where you are located
                  geographically, the applicable privacy law may mean you have
                  certain rights regarding your personal information.
                </span>
              </p>
              <p className="c14">
                <span className="c6">
                  How do you exercise your rights? The easiest way to exercise
                  your rights is by filling out our data subject request form
                  available here, or by contacting us. We will consider and act
                  upon any request in accordance with applicable data protection
                  laws.
                </span>
              </p>
              <p className="c14">
                <span className="c6">
                  Want to learn more about what Fastkart store (Care Plus App)
                  does with any information we collect?
                </span>
              </p>
              <h3 className="c67" id="h.7cx5go7p4bi8">
                <span className="c15">TABLE OF CONTENTS</span>
              </h3>
              <ol className="c10 lst-kix_x5d51hdnn3nx-0 start" start={1}>
                <li className="c5 li-bullet-0">
                  <span className="c0">WHAT INFORMATION DO WE COLLECT?</span>
                </li>
                <li className="c5 li-bullet-0">
                  <span className="c16 c12">
                    HOW DO WE PROCESS YOUR INFORMATION?
                  </span>
                </li>
                <li className="c5 li-bullet-0">
                  <span className="c0">
                    WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                  </span>
                </li>
                <li className="c5 li-bullet-0">
                  <span className="c29">
                    DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                  </span>
                </li>
                <li className="c5 li-bullet-0">
                  <span className="c16 c12">
                    HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                  </span>
                </li>
                <li className="c5 li-bullet-0">
                  <span className="c0">
                    HOW LONG DO WE KEEP YOUR INFORMATION?
                  </span>
                </li>
                <li className="c5 li-bullet-0">
                  <span className="c0">
                    DO WE COLLECT INFORMATION FROM MINORS?
                  </span>
                </li>
                <li className="c5 li-bullet-0">
                  <span className="c0">WHAT ARE YOUR PRIVACY RIGHTS?</span>
                </li>
                <li className="c5 li-bullet-0">
                  <span className="c0">CONTROLS FOR DO-NOT-TRACK FEATURES</span>
                </li>
                <li className="c5 li-bullet-0">
                  <span className="c0">DO WE MAKE UPDATES TO THIS NOTICE?</span>
                </li>
                <li className="c5 li-bullet-0">
                  <span className="c0">
                    HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                  </span>
                </li>
                <li className="c5 li-bullet-0">
                  <span className="c12 c16">
                    HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                    FROM YOU?
                  </span>
                </li>
              </ol>
              <p className="c4">
                <span className="c1" />
              </p>
              <ol className="c10 lst-kix_82xis6i4yipi-0 start" start={1}>
                <li className="c5 li-bullet-0">
                  <span className="c22 c19 c24">
                    WHAT INFORMATION DO WE COLLECT?
                  </span>
                </li>
              </ol>
              <p className="c40">
                <span className="c15 c12 c18">
                  The personal information you disclose to us
                </span>
              </p>
              <p className="c28">
                <span className="c25 c43 c48">
                  In Short: We collect personal information that you provide to
                  us.
                </span>
              </p>
              <p className="c28">
                <span className="c6">
                  We collect personal information that you voluntarily provide
                  to us when you register on the Services, express an interest
                  in obtaining information about us or our products and
                  Services, when you participate in activities on the Services,
                  or otherwise when you contact us.
                </span>
              </p>
              <p className="c28">
                <span className="c6">
                  Sensitive Information. We do not process sensitive
                  information.
                </span>
              </p>
              <p className="c28">
                <span className="c21">
                  All personal information that you provide to us must be true,
                  complete, and accurate, and you must notify us of any changes
                  to such personal information.
                </span>
              </p>
              <p className="c38">
                <span className="c15">Information automatically collected</span>
              </p>
              <p className="c38">
                <span className="c25 c48 c43">
                  In Short: Some information — such as your Internet Protocol
                  (IP) address and/or browser and device characteristics — is
                  collected automatically when you visit our Services.
                </span>
              </p>
              <p className="c7">
                <span className="c21">
                  We automatically collect certain information when you visit,
                  use, or navigate the Services. This information does not
                  reveal your specific identity (like your name or contact
                  information) but may include device and usage information,
                  such as your IP address, browser, and device characteristics,
                  operating system, language preferences, referring URLs, device
                  name, country, location, information about how and when you
                  use our Services, and other technical details. This
                  information is primarily needed to maintain the security and
                  operation of our Services, and for our internal analytics and
                  reporting purposes. Like many businesses, we also collect
                  information through cookies and similar technologies.
                </span>
              </p>
              <ol className="c10 lst-kix_nbc4c02gesif-0 start" start={2}>
                <li className="c5 li-bullet-0">
                  <span className="c22 c18 c43 c19">
                    HOW DO WE PROCESS YOUR INFORMATION?
                  </span>
                </li>
              </ol>
              <p className="c11">
                <span className="c25 c48 c43">
                  In Short: We process your information to provide, improve, and
                  administer our Services, communicate with you, for security
                  and fraud prevention, and comply with the law. We may also
                  process your information for other purposes with your consent.
                </span>
              </p>
              <p className="c11">
                <span className="c21">
                  We process your personal information for a variety of reasons,
                  depending on how you interact with our Services.
                </span>
              </p>
              <ol className="c10 lst-kix_j1mjeft07f4-0 start" start={3}>
                <li className="c5 li-bullet-0">
                  <span className="c19">
                    WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                  </span>
                </li>
              </ol>
              <p className="c11">
                <span className="c23 c74">In Short: </span>
                <span className="c25 c48 c43">
                  We may share information in specific situations described in
                  this section and/or with the following third parties.
                </span>
              </p>
              <p className="c11">
                <span className="c6">
                  We may need to share your personal information in the
                  following situations:
                </span>
              </p>
              <p className="c11">
                <span className="c21">
                  Business Transfers. We may share or transfer your information
                  in connection with, or during negotiations of, any merger,
                  sale of company assets, financing, or acquisition of all or a
                  portion of our business to another company.
                </span>
              </p>
              <ul className="c10 lst-kix_xaf0xpvfenbs-1 start">
                <li className="c37 li-bullet-0">
                  <span className="c23">Affiliates. </span>
                  <span className="c70">
                    We may share your information with our affiliates, in which
                    case we will require those affiliates to honor this privacy
                    notice. Affiliates include our parent company and any
                    subsidiaries, joint venture partners, or other companies
                    that we control or that are under common control with us.
                  </span>
                </li>
              </ul>
              <ul className="c10 lst-kix_aegwpzxie9x0-1 start">
                <li className="c37 li-bullet-0">
                  <span className="c23">Business </span>
                  <span className="c70">
                    Partners. We may share your information with our business
                    partners to offer you certain products, services, or
                    promotions.
                  </span>
                </li>
              </ul>
              <ol className="c10 lst-kix_ugab9c7lbjsm-0 start" start={4}>
                <li className="c5 li-bullet-0">
                  <span className="c12">DO WE USE COOKIES AND OTHER </span>
                  <span className="c2">TRACKING </span>
                  <span className="c22 c18 c12 c43">TECHNOLOGIES?</span>
                </li>
              </ol>
              <p className="c11">
                <span className="c25 c48 c43">
                  In Short: We may use cookies and other tracking technologies
                  to collect and store your information.
                </span>
              </p>
              <p className="c11">
                <span className="c6">
                  We may use cookies and similar tracking technologies (like web
                  beacons and pixels) to access or store information. Specific
                  information about how we use such technologies and how you can
                  refuse certain cookies is set out in our Cookie Notice.
                </span>
              </p>
              <p className="c31">
                <span className="c1" />
              </p>
              <ol className="c10 lst-kix_fp0nloa8tucn-0 start" start={5}>
                <li className="c5 li-bullet-0">
                  <span className="c2">
                    HOW DO WE HANDLE YOUR SOCIAL MEDIA LOGIN?
                  </span>
                </li>
              </ol>
              <p className="c60">
                <span className="c25 c48 c43">
                  In Short: If you choose to register or log in to our services
                  using a social media account, we may have access to certain
                  information about you.
                </span>
              </p>
              <p className="c41 c49">
                <span className="c6">
                  Our Services offer you the ability to register and log in
                  using your third-party social media account details (like your
                  Facebook or Google logins). Where you choose to do this, we
                  will receive certain
                </span>
              </p>
              <p className="c59">
                <span className="c6">
                  profile information about you from your social media provider.
                  The profile information we receive may vary depending on the
                  social media provider concerned, but will often include your
                  name, email address, friends list, and profile picture, as
                  well as other information you choose to make public on such a
                  social media platform.
                </span>
              </p>
              <p className="c31">
                <span className="c1" />
              </p>
              <p className="c42">
                <span className="c21">
                  We will use the information we receive only for the purposes
                  that are described in this privacy notice or that are
                  otherwise made clear to you on the relevant Services. Please
                  note that we do not control, and are not responsible for,
                  other uses of your personal information by your third-party
                  social media provider. We recommend that you review their
                  privacy notice to understand how they collect, use, and share
                  your personal information, and how you can set your privacy
                  preferences on their sites and apps.
                </span>
              </p>
              <ol className="c10 lst-kix_dd30zccvys9f-0 start" start={6}>
                <li className="c5 li-bullet-0">
                  <span className="c12">HOW LONG </span>
                  <span className="c22 c2 c18">
                    DO WE KEEP YOUR INFORMATION?
                  </span>
                </li>
              </ol>
              <p className="c64">
                <span className="c25">
                  In Short: We keep your information for as long as necessary to
                  fulfill the purposes outlined in this privacy notice unless
                  otherwise required by law.
                </span>
              </p>
              <p className="c66">
                <span className="c21">
                  We will only keep your personal information for as long as it
                  is necessary for the purposes set out in this privacy notice
                  unless a longer retention period is required or permitted by
                  law (such as tax, accounting, or other legal requirements).
                </span>
              </p>
              <p className="c30">
                <span className="c6">
                  When we have no ongoing legitimate business need to process
                  your personal information, we will either delete or anonymize
                  such information or, if this is not possible (for example,
                  because your personal information has been stored in backup
                  archives), then we will securely store your personal
                  information and isolate it from any further processing until
                  deletion is possible.
                </span>
              </p>
              <p className="c31">
                <span className="c1" />
              </p>
              <ol className="c10 lst-kix_kbzl1qqk023c-0 start" start={7}>
                <li className="c5 li-bullet-0">
                  <span className="c2 c18 c22">
                    DO WE COLLECT INFORMATION FROM MINORS?
                  </span>
                </li>
              </ol>
              <p className="c47">
                <span className="c44 c18 c43">
                  In Short: We do not knowingly collect data from or market to
                  children under 18 years of age.
                </span>
              </p>
              <p className="c8">
                <span className="c18 c43 c44" />
              </p>
              <p className="c69">
                <span className="c63 c43">
                  We do not knowingly solicit data from or market to children
                  under 18 years of age. By using the Services, you represent
                  that you are at least 18 or that you are the parent or
                  guardian of such a minor and consent to such minor dependent’s
                  use of the Services. If we learn that personal information
                  from users less than 18 years of age has been collected, we
                  will deactivate the account and take reasonable measures to
                  delete such data from our records promptly. If you become
                  aware of any data we may have collected from children under
                  the age of 18, please contact us at{" "}
                </span>
                <span className="c36 c18 c43 c57">
                  careplusbusiness@gmail.com
                </span>
              </p>
              <p className="c17">
                <span className="c1" />
              </p>
              <ol className="c10 lst-kix_wtfcblnbni8v-0 start" start={8}>
                <li className="c5 li-bullet-0">
                  <span className="c22 c2 c18">
                    WHAT ARE YOUR PRIVACY RIGHTS?
                  </span>
                </li>
              </ol>
              <p className="c53">
                <span className="c1">
                  In Short: You may review, change, or terminate your account at
                  any time.
                </span>
              </p>
              <p className="c31">
                <span className="c1" />
              </p>
              <p className="c68">
                <span className="c34">Withdrawing your consent:</span>
                <span className="c55 c75">&nbsp;</span>
                <span className="c35">
                  If we are relying on your consent to process your personal
                  information, which may be express and/or implied consent
                  depending on the applicable law, you have the right to
                  withdraw your consent at any time. You can withdraw your
                  consent at any time by contacting us by using the contact
                  details provided in the section "
                </span>
                <span className="c39 c35">
                  HOW CAN YOU CONTACT US ABOUT THIS
                </span>
                <span className="c35">&nbsp;</span>
                <span className="c35 c39">NOTICE?</span>
                <span className="c1">" below.</span>
              </p>
              <p className="c3">
                <span className="c1">
                  However, please note that this will not affect the lawfulness
                  of the processing before its withdrawal nor, when applicable
                  law allows, will it affect the processing of your personal
                  information conducted in reliance on lawful processing grounds
                  other than consent.
                </span>
              </p>
              <p className="c31">
                <span className="c1" />
              </p>
              <p className="c54">
                <span className="c22 c18 c52 c55">Account Information</span>
              </p>
              <p className="c4">
                <span className="c1" />
              </p>
              <p className="c32">
                <span className="c1">
                  If you would at any time like to review or change the
                  information in your account or terminate your account, you
                  can:
                </span>
              </p>
              <p className="c41">
                <span className="c1">
                  Upon your request to terminate your account, we will
                  deactivate or delete your account and information from our
                  active databases. However, we may retain some information in
                  our files to prevent fraud, troubleshoot problems, assist with
                  any investigations, enforce our legal terms, and/or comply
                  with applicable legal requirements.
                </span>
              </p>
              <ol className="c10 lst-kix_kzeypfeowecz-0 start" start={9}>
                <li className="c5 li-bullet-0">
                  <span className="c22 c2 c18">
                    CONTROLS FOR DO-NOT-TRACK FEATURES
                  </span>
                </li>
              </ol>
              <p className="c11">
                <span className="c1">
                  Most web browsers and some mobile operating systems and mobile
                  applications include a Do-Not-Track ("DNT") feature or setting
                  you can activate to signal your privacy preference not to have
                  data about your online browsing activities monitored and
                  collected. At this stage, no uniform technology standard for
                  recognizing and implementing DNT signals has been finalized.
                  As such, we do not currently respond to DNT browser signals or
                  any other mechanism that automatically communicates your
                  choice not to be tracked online. If a standard for online
                  tracking is adopted that we must follow in the future, we will
                  inform you about that practice in a revised version of this
                  privacy notice.
                </span>
              </p>
              <ol className="c10 lst-kix_eickmujxoqy6-0 start" start={10}>
                <li className="c5 li-bullet-0">
                  <span className="c22 c2 c18">
                    DO WE MAKE UPDATES TO THIS NOTICE?
                  </span>
                </li>
              </ol>
              <p className="c11">
                <span className="c65">
                  In Short: Yes, we will update this notice as necessary to stay
                  compliant with relevant laws.
                </span>
              </p>
              <p className="c9">
                <span className="c44 c18 c43">
                  We may update this privacy notice from time to time. The
                  updated version will be indicated by an updated "Revised" date
                  and the updated version will be effective as soon as it is
                  accessible. If we make material changes to this privacy
                  notice, we may notify you either by prominently posting a
                  notice of such changes or by directly sending you a
                  notification. We encourage you to review this privacy notice
                  frequently to be informed of how we are protecting your
                  information.
                </span>
              </p>
              <ol className="c10 lst-kix_a7unv2p3w4up-0 start" start={11}>
                <li className="c5 li-bullet-0">
                  <span className="c22 c2 c18">
                    HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                  </span>
                </li>
              </ol>
              <p className="c56">
                <span className="c43 c63">
                  If you have questions or comments about this notice, you may
                  email us at{" "}
                </span>
                <span className="c36 c63 c43">careplusbusiness@gmail.com</span>
              </p>
              <ol className="c10 lst-kix_x1zdv77aoxhs-0 start" start={12}>
                <li className="c5 li-bullet-0">
                  <span className="c22 c2 c18">
                    HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                    FROM YOU?
                  </span>
                </li>
              </ol>
              <p className="c13">
                <span className="c35">
                  Based on the applicable laws of India, you may have the right
                  to request access to the personal information we collect from
                  you, change that information, or delete it. To request to
                  review, update, or delete your personal information, please
                  submit a request by emailing us at{" "}
                </span>
                <span className="c36 c57 c18 c43">
                  careplusbusiness@gmail.com
                </span>
              </p>
              <p className="c20">
                <span className="c22 c18 c43 c52" />
              </p>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
