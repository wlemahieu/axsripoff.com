/**
 * Privacy policy page view
 */
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '@views/Privacy.module.css';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Privacy: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      <Typography variant="h2">Privacy Policy</Typography>
      <Typography variant="body2">Last updated: December 21, 2022</Typography>
      <Typography variant="body2">
        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
        information when You use the Service and tells You about Your privacy rights and how the law protects You.
      </Typography>
      <Typography variant="body2">
        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection
        and use of information in accordance with this Privacy Policy.
      </Typography>
      <Typography variant="h2">Interpretation and Definitions</Typography>
      <Typography variant="h3">Interpretation</Typography>
      <Typography variant="body2">
        The words of which the initial letter is capitalized have meanings defined under the following conditions. The
        following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
      </Typography>
      <Typography variant="h3">Definitions</Typography>
      <Typography variant="body2">For the purposes of this Privacy Policy:</Typography>
      <ul>
        <li>
          <Typography variant="body2">
            <strong>Account</strong> means a unique account created for You to access our Service or parts of our
            Service.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Business</strong>, for the purpose of the CCPA (California Consumer Privacy Act), refers to the
            Company as the legal entity that collects Consumers' personal information and determines the purposes and
            means of the processing of Consumers' personal information, or on behalf of which such information is
            collected and that alone, or jointly with others, determines the purposes and means of the processing of
            consumers' personal information, that does business in the State of California.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or
            &quot;Our&quot; in this Agreement) refers to Pugs, LLC, 401 RYLAND ST STE 200-A, RENO, NV 89135, USA.
          </Typography>
          <Typography variant="body2">For the purpose of the GDPR, the Company is the Data Controller.</Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Consumer</strong>, for the purpose of the CCPA (California Consumer Privacy Act), means a natural
            person who is a California resident. A resident, as defined in the law, includes (1) every individual who is
            in the USA for other than a temporary or transitory purpose, and (2) every individual who is domiciled in
            the USA who is outside the USA for a temporary or transitory purpose.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device
            by a website, containing the details of Your browsing history on that website among its many uses.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Country</strong> refers to: Nevada, United States
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Data Controller</strong>, for the purposes of the GDPR (General Data Protection Regulation), refers
            to the Company as the legal person which alone or jointly with others determines the purposes and means of
            the processing of Personal Data.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a
            digital tablet.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Do Not Track</strong> (DNT) is a concept that has been promoted by US regulatory authorities, in
            particular the U.S. Federal Trade Commission (FTC), for the Internet industry to develop and implement a
            mechanism for allowing internet users to control the tracking of their online activities across websites.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.
          </Typography>
          <Typography variant="body2">
            For the purposes of GDPR, Personal Data means any information relating to You such as a name, an
            identification number, location data, online identifier or to one or more factors specific to the physical,
            physiological, genetic, mental, economic, cultural or social identity.
          </Typography>
          <Typography variant="body2">
            For the purposes of the CCPA, Personal Data means any information that identifies, relates to, describes or
            is capable of being associated with, or could reasonably be linked, directly or indirectly, with You.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Sale</strong>, for the purpose of the CCPA (California Consumer Privacy Act), means selling,
            renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating
            orally, in writing, or by electronic or other means, a Consumer's personal information to another business
            or a third party for monetary or other valuable consideration.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Service</strong> refers to the Website.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the
            Company. It refers to third-party companies or individuals employed by the Company to facilitate the
            Service, to provide the Service on behalf of the Company, to perform services related to the Service or to
            assist the Company in analyzing how the Service is used. For the purpose of the GDPR, Service Providers are
            considered Data Processors.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the
            Service or from the Service infrastructure itself (for example, the duration of a page visit).
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Website</strong> refers to axsripoff.com, accessible from{' '}
            <Link onClick={() => navigate('/')}>https://axsripoff.com/</Link>
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal
            entity on behalf of which such individual is accessing or using the Service, as applicable.
          </Typography>
          <Typography variant="body2">
            Under GDPR (General Data Protection Regulation), You can be referred to as the Data Subject or as the User
            as you are the individual using the Service.
          </Typography>
        </li>
      </ul>
      <Typography variant="h2">Collecting and Using Your Personal Data</Typography>
      <Typography variant="h3">Types of Data Collected</Typography>
      <Typography variant="h4">Personal Data</Typography>
      <Typography variant="body2">
        While using Our Service, We may ask You to provide Us with certain personally identifiable information that can
        be used to contact or identify You. Personally identifiable information may include, but is not limited to:
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">Email address</Typography>
        </li>
        <li>
          <Typography variant="body2">First name and last name</Typography>
        </li>
        <li>
          <Typography variant="body2">Usage Data</Typography>
        </li>
      </ul>
      <Typography variant="h4">Usage Data</Typography>
      <Typography variant="body2">Usage Data is collected automatically when using the Service.</Typography>
      <Typography variant="body2">
        Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser
        type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent
        on those pages, unique device identifiers and other diagnostic data.
      </Typography>
      <Typography variant="body2">
        When You access the Service by or through a mobile device, We may collect certain information automatically,
        including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address
        of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device
        identifiers and other diagnostic data.
      </Typography>
      <Typography variant="body2">
        We may also collect information that Your browser sends whenever You visit our Service or when You access the
        Service by or through a mobile device.
      </Typography>
      <Typography variant="h4">Tracking Technologies and Cookies</Typography>
      <Typography variant="body2">
        We use Cookies and similar tracking technologies to track the activity on Our Service and store certain
        information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to
        improve and analyze Our Service. The technologies We use may include:
      </Typography>
      <ul>
        <li>
          <strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct
          Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept
          Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting
          so that it will refuse Cookies, our Service may use Cookies.
        </li>
        <li>
          <strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic
          files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the
          Company, for example, to count users who have visited those pages or opened an email and for other related
          website statistics (for example, recording the popularity of a certain section and verifying system and server
          integrity).
        </li>
      </ul>
      <Typography variant="body2">
        Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal
        computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web
        browser. You can learn more about cookies on{' '}
        <Link href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies" target="_blank">
          TermsFeed website
        </Link>{' '}
        article.
      </Typography>
      <Typography variant="body2">
        We use both Session and Persistent Cookies for the purposes set out below:
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">
            <strong>Necessary / Essential Cookies</strong>
          </Typography>
          <Typography variant="body2">Type: Session Cookies</Typography>
          <Typography variant="body2">Administered by: Us</Typography>
          <Typography variant="body2">
            Purpose: These Cookies are essential to provide You with services available through the Website and to
            enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user
            accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use
            these Cookies to provide You with those services.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Cookies Policy / Notice Acceptance Cookies</strong>
          </Typography>
          <Typography variant="body2">Type: Persistent Cookies</Typography>
          <Typography variant="body2">Administered by: Us</Typography>
          <Typography variant="body2">
            Purpose: These Cookies identify if users have accepted the use of cookies on the Website.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Functionality Cookies</strong>
          </Typography>
          <Typography variant="body2">Type: Persistent Cookies</Typography>
          <Typography variant="body2">Administered by: Us</Typography>
          <Typography variant="body2">
            Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering
            your login details or language preference. The purpose of these Cookies is to provide You with a more
            personal experience and to avoid You having to re-enter your preferences every time You use the Website.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Tracking and Performance Cookies</strong>
          </Typography>
          <Typography variant="body2">Type: Persistent Cookies</Typography>
          <Typography variant="body2">Administered by: Third-Parties</Typography>
          <Typography variant="body2">
            Purpose: These Cookies are used to track information about traffic to the Website and how users use the
            Website. The information gathered via these Cookies may directly or indirectly identify you as an individual
            visitor. This is because the information collected is typically linked to a pseudonymous identifier
            associated with the device you use to access the Website. We may also use these Cookies to test new pages,
            features or new functionality of the Website to see how our users react to them.
          </Typography>
        </li>
      </ul>
      <Typography variant="body2">
        For more information about the cookies we use and your choices regarding cookies, please visit our Cookies
        Policy or the Cookies section of our Privacy Policy.
      </Typography>
      <Typography variant="h3">Use of Your Personal Data</Typography>
      <Typography variant="body2">The Company may use Personal Data for the following purposes:</Typography>
      <ul>
        <li>
          <Typography variant="body2">
            <strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal
            Data You provide can give You access to different functionalities of the Service that are available to You
            as a registered user.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>For the performance of a contract:</strong> the development, compliance and undertaking of the
            purchase contract for the products, items or services You have purchased or of any other contract with Us
            through the Service.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of
            electronic communication, such as a mobile application's push notifications regarding updates or informative
            communications related to the functionalities, products or contracted services, including the security
            updates, when necessary or reasonable for their implementation.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>To provide You</strong> with news, special offers and general information about other goods,
            services and events which we offer that are similar to those that you have already purchased or enquired
            about unless You have opted not to receive such information.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>To manage Your requests:</strong> To attend and manage Your requests to Us.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger,
            divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our
            assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which
            Personal Data held by Us about our Service users is among the assets transferred.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis,
            identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and
            improve our Service, products, services, marketing and your experience.
          </Typography>
        </li>
      </ul>
      <Typography variant="body2">We may share Your personal information in the following situations:</Typography>
      <ul>
        <li>
          <strong>With Service Providers:</strong> We may share Your personal information with Service Providers to
          monitor and analyze the use of our Service, to contact You.
        </li>
        <li>
          <strong>For business transfers:</strong> We may share or transfer Your personal information in connection
          with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a
          portion of Our business to another company.
        </li>
        <li>
          <strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will
          require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other
          subsidiaries, joint venture partners or other companies that We control or that are under common control with
          Us.
        </li>
        <li>
          <strong>With business partners:</strong> We may share Your information with Our business partners to offer You
          certain products, services or promotions.
        </li>
        <li>
          <strong>With other users:</strong> when You share personal information or otherwise interact in the public
          areas with other users, such information may be viewed by all users and may be publicly distributed outside.
        </li>
        <li>
          <strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your
          consent.
        </li>
      </ul>
      <Typography variant="h3">Retention of Your Personal Data</Typography>
      <Typography variant="body2">
        The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this
        Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal
        obligations (for example, if we are required to retain your data to comply with applicable laws), resolve
        disputes, and enforce our legal agreements and policies.
      </Typography>
      <Typography variant="body2">
        The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a
        shorter period of time, except when this data is used to strengthen the security or to improve the functionality
        of Our Service, or We are legally obligated to retain this data for longer time periods.
      </Typography>
      <Typography variant="h3">Transfer of Your Personal Data</Typography>
      <Typography variant="body2">
        Your information, including Personal Data, is processed at the Company's operating offices and in any other
        places where the parties involved in the processing are located. It means that this information may be
        transferred to — and maintained on — computers located outside of Your state, province, country or other
        governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
      </Typography>
      <Typography variant="body2">
        Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to
        that transfer.
      </Typography>
      <Typography variant="body2">
        The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in
        accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or
        a country unless there are adequate controls in place including the security of Your data and other personal
        information.
      </Typography>
      <Typography variant="h3">Delete Your Personal Data</Typography>
      <Typography variant="body2">
        You have the right to delete or request that We assist in deleting the Personal Data that We have collected
        about You.
      </Typography>
      <Typography variant="body2">
        Our Service may give You the ability to delete certain information about You from within the Service.
      </Typography>
      <Typography variant="body2">
        You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one,
        and visiting the account settings section that allows you to manage Your personal information. You may also
        contact Us to request access to, correct, or delete any personal information that You have provided to Us.
      </Typography>
      <Typography variant="body2">
        Please note, however, that We may need to retain certain information when we have a legal obligation or lawful
        basis to do so.
      </Typography>
      <Typography variant="h3">Disclosure of Your Personal Data</Typography>
      <Typography variant="h4">Business Transactions</Typography>
      <Typography variant="body2">
        If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We
        will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
      </Typography>
      <Typography variant="h4">Law enforcement</Typography>
      <Typography variant="body2">
        Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by
        law or in response to valid requests by public authorities (e.g. a court or a government agency).
      </Typography>
      <Typography variant="h4">Other legal requirements</Typography>
      <Typography variant="body2">
        The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
      </Typography>
      <ul>
        <li>Comply with a legal obligation</li>
        <li>Protect and defend the rights or property of the Company</li>
        <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
        <li>Protect the personal safety of Users of the Service or the public</li>
        <li>Protect against legal liability</li>
      </ul>
      <Typography variant="h3">Security of Your Personal Data</Typography>
      <Typography variant="body2">
        The security of Your Personal Data is important to Us, but remember that no method of transmission over the
        Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means
        to protect Your Personal Data, We cannot guarantee its absolute security.
      </Typography>
      <Typography variant="h2">Detailed Information on the Processing of Your Personal Data</Typography>
      <Typography variant="body2">
        The Service Providers We use may have access to Your Personal Data. These third-party vendors collect, store,
        use, process and transfer information about Your activity on Our Service in accordance with their Privacy
        Policies.
      </Typography>
      <Typography variant="h3">Analytics</Typography>
      <Typography variant="body2">
        We may use third-party Service providers to monitor and analyze the use of our Service.
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">
            <strong>Google Analytics</strong>
          </Typography>
          <Typography variant="body2">
            Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.
            Google uses the data collected to track and monitor the use of our Service. This data is shared with other
            Google services. Google may use the collected data to contextualize and personalize the ads of its own
            advertising network.
          </Typography>
          <Typography variant="body2">
            You can opt-out of having made your activity on the Service available to Google Analytics by installing the
            Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js,
            analytics.js and dc.js) from sharing information with Google Analytics about visits activity.
          </Typography>
          <Typography variant="body2">
            For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms web
            page:{' '}
            <Link href="https://policies.google.com/privacy" rel="external nofollow noopener" target="_blank">
              https://policies.google.com/privacy
            </Link>
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Firebase</strong>
          </Typography>
          <Typography variant="body2">Firebase is an analytics service provided by Google Inc.</Typography>
          <Typography variant="body2">
            You may opt-out of certain Firebase features through your mobile device settings, such as your device
            advertising settings or by following the instructions provided by Google in their Privacy Policy:{' '}
            <Link href="https://policies.google.com/privacy" rel="external nofollow noopener" target="_blank">
              https://policies.google.com/privacy
            </Link>
          </Typography>
          <Typography variant="body2">
            We also encourage you to review the Google's policy for safeguarding your data:{' '}
            <a
              href="https://support.google.com/analytics/answer/6004245"
              rel="external nofollow noopener"
              target="_blank"
            >
              https://support.google.com/analytics/answer/6004245
            </a>
          </Typography>
          <Typography variant="body2">
            For more information on what type of information Firebase collects, please visit the How Google uses data
            when you use our partners' sites or apps webpage:{' '}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              rel="external nofollow noopener"
              target="_blank"
            >
              https://policies.google.com/technologies/partner-sites
            </a>
          </Typography>
        </li>
      </ul>
      <Typography variant="h3">Email Marketing</Typography>
      <Typography variant="body2">
        We may use Your Personal Data to contact You with newsletters, marketing or promotional materials and other
        information that may be of interest to You. You may opt-out of receiving any, or all, of these communications
        from Us by following the unsubscribe link or instructions provided in any email We send or by contacting Us.
      </Typography>
      <Typography variant="body2">
        We may use Email Marketing Service Providers to manage and send emails to You.
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">
            <strong>SendGrid</strong>
          </Typography>
          <Typography variant="body2">
            Their Privacy Policy can be viewed at{' '}
            <Link href="https://www.twilio.com/legal/privacy" rel="external nofollow noopener" target="_blank">
              https://www.twilio.com/legal/privacy
            </Link>
          </Typography>
        </li>
      </ul>
      <Typography variant="h3">Usage, Performance and Miscellaneous</Typography>
      <Typography variant="body2">
        We may use third-party Service Providers to provide better improvement of our Service.
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">
            <strong>Invisible reCAPTCHA</strong>
          </Typography>
          <Typography variant="body2">
            We use an invisible captcha service named reCAPTCHA. reCAPTCHA is operated by Google.
          </Typography>
          <Typography variant="body2">
            The reCAPTCHA service may collect information from You and from Your Device for security purposes.
          </Typography>
          <Typography variant="body2">
            The information gathered by reCAPTCHA is held in accordance with the Privacy Policy of Google:{' '}
            <Link
              href="https://www.google.com/intl/en/policies/privacy/"
              rel="external nofollow noopener"
              target="_blank"
            >
              https://www.google.com/intl/en/policies/privacy/
            </Link>
          </Typography>
        </li>
      </ul>
      <Typography variant="h2">GDPR Privacy</Typography>
      <Typography variant="h3">Legal Basis for Processing Personal Data under GDPR</Typography>
      <Typography variant="body2">We may process Personal Data under the following conditions:</Typography>
      <ul>
        <li>
          <strong>Consent:</strong> You have given Your consent for processing Personal Data for one or more specific
          purposes.
        </li>
        <li>
          <strong>Performance of a contract:</strong> Provision of Personal Data is necessary for the performance of an
          agreement with You and/or for any pre-contractual obligations thereof.
        </li>
        <li>
          <strong>Legal obligations:</strong> Processing Personal Data is necessary for compliance with a legal
          obligation to which the Company is subject.
        </li>
        <li>
          <strong>Vital interests:</strong> Processing Personal Data is necessary in order to protect Your vital
          interests or of another natural person.
        </li>
        <li>
          <strong>Public interests:</strong> Processing Personal Data is related to a task that is carried out in the
          public interest or in the exercise of official authority vested in the Company.
        </li>
        <li>
          <strong>Legitimate interests:</strong> Processing Personal Data is necessary for the purposes of the
          legitimate interests pursued by the Company.
        </li>
      </ul>
      <Typography variant="body2">
        In any case, the Company will gladly help to clarify the specific legal basis that applies to the processing,
        and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a
        requirement necessary to enter into a contract.
      </Typography>
      <Typography variant="h3">Your Rights under the GDPR</Typography>
      <Typography variant="body2">
        The Company undertakes to respect the confidentiality of Your Personal Data and to guarantee You can exercise
        Your rights.
      </Typography>
      <Typography variant="body2">
        You have the right under this Privacy Policy, and by law if You are within the EU, to:
      </Typography>
      <ul>
        <li>
          <strong>Request access to Your Personal Data.</strong> The right to access, update or delete the information
          We have on You. Whenever made possible, you can access, update or request deletion of Your Personal Data
          directly within Your account settings section. If you are unable to perform these actions yourself, please
          contact Us to assist You. This also enables You to receive a copy of the Personal Data We hold about You.
        </li>
        <li>
          <strong>Request correction of the Personal Data that We hold about You.</strong> You have the right to have
          any incomplete or inaccurate information We hold about You corrected.
        </li>
        <li>
          <strong>Object to processing of Your Personal Data.</strong> This right exists where We are relying on a
          legitimate interest as the legal basis for Our processing and there is something about Your particular
          situation, which makes You want to object to our processing of Your Personal Data on this ground. You also
          have the right to object where We are processing Your Personal Data for direct marketing purposes.
        </li>
        <li>
          <strong>Request erasure of Your Personal Data.</strong> You have the right to ask Us to delete or remove
          Personal Data when there is no good reason for Us to continue processing it.
        </li>
        <li>
          <strong>Request the transfer of Your Personal Data.</strong> We will provide to You, or to a third-party You
          have chosen, Your Personal Data in a structured, commonly used, machine-readable format. Please note that this
          right only applies to automated information which You initially provided consent for Us to use or where We
          used the information to perform a contract with You.
        </li>
        <li>
          <strong>Withdraw Your consent.</strong> You have the right to withdraw Your consent on using your Personal
          Data. If You withdraw Your consent, We may not be able to provide You with access to certain specific
          functionalities of the Service.
        </li>
      </ul>
      <Typography variant="h3">Exercising of Your GDPR Data Protection Rights</Typography>
      <Typography variant="body2">
        You may exercise Your rights of access, rectification, cancellation and opposition by contacting Us. Please note
        that we may ask You to verify Your identity before responding to such requests. If You make a request, We will
        try our best to respond to You as soon as possible.
      </Typography>
      <Typography variant="body2">
        You have the right to complain to a Data Protection Authority about Our collection and use of Your Personal
        Data. For more information, if You are in the European Economic Area (EEA), please contact Your local data
        protection authority in the EEA.
      </Typography>
      <Typography variant="h2">CCPA Privacy</Typography>
      <Typography variant="body2">
        This privacy notice section for California residents supplements the information contained in Our Privacy Policy
        and it applies solely to all visitors, users, and others who reside in the State of California.
      </Typography>
      <Typography variant="h3">Categories of Personal Information Collected</Typography>
      <Typography variant="body2">
        We collect information that identifies, relates to, describes, references, is capable of being associated with,
        or could reasonably be linked, directly or indirectly, with a particular Consumer or Device. The following is a
        list of categories of personal information which we may collect or may have been collected from California
        residents within the last twelve (12) months.
      </Typography>
      <Typography variant="body2">
        Please note that the categories and examples provided in the list below are those defined in the CCPA. This does
        not mean that all examples of that category of personal information were in fact collected by Us, but reflects
        our good faith belief to the best of our knowledge that some of that information from the applicable category
        may be and may have been collected. For example, certain categories of personal information would only be
        collected if You provided such personal information directly to Us.
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">
            <strong>Category A: Identifiers.</strong>
          </Typography>
          <Typography variant="body2">
            Examples: A real name, alias, postal address, unique personal identifier, online identifier, Internet
            Protocol address, email address, account name, driver's license number, passport number, or other similar
            identifiers.
          </Typography>
          <Typography variant="body2">Collected: Yes.</Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>
              Category B: Personal information categories listed in the California Customer Records statute (Cal. Civ.
              Code § 1798.80(e)).
            </strong>
          </Typography>
          <Typography variant="body2">
            Examples: A name, signature, Social Security number, physical characteristics or description, address,
            telephone number, passport number, driver's license or state identification card number, insurance policy
            number, education, employment, employment history, bank account number, credit card number, debit card
            number, or any other financial information, medical information, or health insurance information. Some
            personal information included in this category may overlap with other categories.
          </Typography>
          <Typography variant="body2">Collected: Yes.</Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Category C: Protected classification characteristics under California or federal law.</strong>
          </Typography>
          <Typography variant="body2">
            Examples: Age (40 years or older), race, color, ancestry, national origin, citizenship, religion or creed,
            marital status, medical condition, physical or mental disability, sex (including gender, gender identity,
            gender expression, pregnancy or childbirth and related medical conditions), sexual orientation, veteran or
            military status, genetic information (including familial genetic information).
          </Typography>
          <Typography variant="body2">Collected: No.</Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Category D: Commercial information.</strong>
          </Typography>
          <Typography variant="body2">
            Examples: Records and history of products or services purchased or considered.
          </Typography>
          <Typography variant="body2">Collected: No.</Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Category E: Biometric information.</strong>
          </Typography>
          <Typography variant="body2">
            Examples: Genetic, physiological, behavioral, and biological characteristics, or activity patterns used to
            extract a template or other identifier or identifying information, such as, fingerprints, faceprints, and
            voiceprints, iris or retina scans, keystroke, gait, or other physical patterns, and sleep, health, or
            exercise data.
          </Typography>
          <Typography variant="body2">Collected: No.</Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Category F: Internet or other similar network activity.</strong>
          </Typography>
          <Typography variant="body2">Examples: Interaction with our Service or advertisement.</Typography>
          <Typography variant="body2">Collected: Yes.</Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Category G: Geolocation data.</strong>
          </Typography>
          <Typography variant="body2">Examples: Approximate physical location.</Typography>
          <Typography variant="body2">Collected: No.</Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Category H: Sensory data.</strong>
          </Typography>
          <Typography variant="body2">
            Examples: Audio, electronic, visual, thermal, olfactory, or similar information.
          </Typography>
          <Typography variant="body2">Collected: No.</Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Category I: Professional or employment-related information.</strong>
          </Typography>
          <Typography variant="body2">Examples: Current or past job history or performance evaluations.</Typography>
          <Typography variant="body2">Collected: No.</Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>
              Category J: Non-public education information (per the Family Educational Rights and Privacy Act (20 U.S.C.
              Section 1232g, 34 C.F.R. Part 99)).
            </strong>
          </Typography>
          <Typography variant="body2">
            Examples: Education records directly related to a student maintained by an educational institution or party
            acting on its behalf, such as grades, transcripts, class lists, student schedules, student identification
            codes, student financial information, or student disciplinary records.
          </Typography>
          <Typography variant="body2">Collected: No.</Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Category K: Inferences drawn from other personal information.</strong>
          </Typography>
          <Typography variant="body2">
            Examples: Profile reflecting a person's preferences, characteristics, psychological trends, predispositions,
            behavior, attitudes, intelligence, abilities, and aptitudes.
          </Typography>
          <Typography variant="body2">Collected: No.</Typography>
        </li>
      </ul>
      <Typography variant="body2">Under CCPA, personal information does not include:</Typography>
      <ul>
        <li>Publicly available information from government records</li>
        <li>Deidentified or aggregated consumer information</li>
        <li>
          Information excluded from the CCPA's scope, such as:
          <ul>
            <li>
              Health or medical information covered by the Health Insurance Portability and Accountability Act of 1996
              (HIPAA) and the California Confidentiality of Medical Information Act (CMIA) or clinical trial data
            </li>
            <li>
              Personal Information covered by certain sector-specific privacy laws, including the Fair Credit Reporting
              Act (FRCA), the Gramm-Leach-Bliley Act (GLBA) or California Financial Information Privacy Act (FIPA), and
              the Driver's Privacy Protection Act of 1994
            </li>
          </ul>
        </li>
      </ul>
      <Typography variant="h3">Sources of Personal Information</Typography>
      <Typography variant="body2">
        We obtain the categories of personal information listed above from the following categories of sources:
      </Typography>
      <ul>
        <li>
          <strong>Directly from You</strong>. For example, from the forms You complete on our Service, preferences You
          express or provide through our Service.
        </li>
        <li>
          <strong>Indirectly from You</strong>. For example, from observing Your activity on our Service.
        </li>
        <li>
          <strong>Automatically from You</strong>. For example, through cookies We or our Service Providers set on Your
          Device as You navigate through our Service.
        </li>
        <li>
          <strong>From Service Providers</strong>. For example, third-party vendors to monitor and analyze the use of
          our Service, or other third-party vendors that We use to provide the Service to You.
        </li>
      </ul>
      <Typography variant="h3">Use of Personal Information for Business Purposes or Commercial Purposes</Typography>
      <Typography variant="body2">
        We may use or disclose personal information We collect for &quot;business purposes&quot; or &quot;commercial
        purposes&quot; (as defined under the CCPA), which may include the following examples:
      </Typography>
      <ul>
        <li>To operate our Service and provide You with our Service.</li>
        <li>
          To provide You with support and to respond to Your inquiries, including to investigate and address Your
          concerns and monitor and improve our Service.
        </li>
        <li>
          To fulfill or meet the reason You provided the information. For example, if You share Your contact information
          to ask a question about our Service, We will use that personal information to respond to Your inquiry.
        </li>
        <li>
          To respond to law enforcement requests and as required by applicable law, court order, or governmental
          regulations.
        </li>
        <li>As described to You when collecting Your personal information or as otherwise set forth in the CCPA.</li>
        <li>For internal administrative and auditing purposes.</li>
        <li>
          To detect security incidents and protect against malicious, deceptive, fraudulent or illegal activity,
          including, when necessary, to prosecute those responsible for such activities.
        </li>
      </ul>
      <Typography variant="body2">
        Please note that the examples provided above are illustrative and not intended to be exhaustive. For more
        details on how we use this information, please refer to the &quot;Use of Your Personal Data&quot; section.
      </Typography>
      <Typography variant="body2">
        If We decide to collect additional categories of personal information or use the personal information We
        collected for materially different, unrelated, or incompatible purposes We will update this Privacy Policy.
      </Typography>
      <Typography variant="h3">
        Disclosure of Personal Information for Business Purposes or Commercial Purposes
      </Typography>
      <Typography variant="body2">
        We may use or disclose and may have used or disclosed in the last twelve (12) months the following categories of
        personal information for business or commercial purposes:
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">Category A: Identifiers</Typography>
        </li>
        <li>
          <Typography variant="body2">
            Category B: Personal information categories listed in the California Customer Records statute (Cal. Civ.
            Code § 1798.80(e))
          </Typography>
        </li>
        <li>
          <Typography variant="body2">Category F: Internet or other similar network activity</Typography>
        </li>
      </ul>
      <Typography variant="body2">
        Please note that the categories listed above are those defined in the CCPA. This does not mean that all examples
        of that category of personal information were in fact disclosed, but reflects our good faith belief to the best
        of our knowledge that some of that information from the applicable category may be and may have been disclosed.
      </Typography>
      <Typography variant="body2">
        When We disclose personal information for a business purpose or a commercial purpose, We enter a contract that
        describes the purpose and requires the recipient to both keep that personal information confidential and not use
        it for any purpose except performing the contract.
      </Typography>
      <Typography variant="h3">Sale of Personal Information</Typography>
      <Typography variant="body2">
        As defined in the CCPA, &quot;sell&quot; and &quot;sale&quot; mean selling, renting, releasing, disclosing,
        disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic
        or other means, a consumer's personal information by the business to a third party for valuable consideration.
        This means that We may have received some kind of benefit in return for sharing personal information, but not
        necessarily a monetary benefit.
      </Typography>
      <Typography variant="body2">
        Please note that the categories listed below are those defined in the CCPA. This does not mean that all examples
        of that category of personal information were in fact sold, but reflects our good faith belief to the best of
        our knowledge that some of that information from the applicable category may be and may have been shared for
        value in return.
      </Typography>
      <Typography variant="body2">
        We may sell and may have sold in the last twelve (12) months the following categories of personal information:
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">Category A: Identifiers</Typography>
        </li>
        <li>
          <Typography variant="body2">
            Category B: Personal information categories listed in the California Customer Records statute (Cal. Civ.
            Code § 1798.80(e))
          </Typography>
        </li>
        <li>
          <Typography variant="body2">Category F: Internet or other similar network activity</Typography>
        </li>
      </ul>
      <Typography variant="h3">Share of Personal Information</Typography>
      <Typography variant="body2">
        We may share Your personal information identified in the above categories with the following categories of third
        parties:
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">Service Providers</Typography>
        </li>
        <li>
          <Typography variant="body2">Our affiliates</Typography>
        </li>
        <li>
          <Typography variant="body2">Our business partners</Typography>
        </li>
        <li>
          <Typography variant="body2">
            Third party vendors to whom You or Your agents authorize Us to disclose Your personal information in
            connection with products or services We provide to You
          </Typography>
        </li>
      </ul>
      <Typography variant="h3">Sale of Personal Information of Minors Under 16 Years of Age</Typography>
      <Typography variant="body2">
        We do not knowingly collect personal information from minors under the age of 16 through our Service, although
        certain third party websites that we link to may do so. These third-party websites have their own terms of use
        and privacy policies and we encourage parents and legal guardians to monitor their children's Internet usage and
        instruct their children to never provide information on other websites without their permission.
      </Typography>
      <Typography variant="body2">
        We do not sell the personal information of Consumers We actually know are less than 16 years of age, unless We
        receive affirmative authorization (the &quot;right to opt-in&quot;) from either the Consumer who is between 13
        and 16 years of age, or the parent or guardian of a Consumer less than 13 years of age. Consumers who opt-in to
        the sale of personal information may opt-out of future sales at any time. To exercise the right to opt-out, You
        (or Your authorized representative) may submit a request to Us by contacting Us.
      </Typography>
      <Typography variant="body2">
        If You have reason to believe that a child under the age of 13 (or 16) has provided Us with personal
        information, please contact Us with sufficient detail to enable Us to delete that information.
      </Typography>
      <Typography variant="h3">Your Rights under the CCPA</Typography>
      <Typography variant="body2">
        The CCPA provides California residents with specific rights regarding their personal information. If You are a
        resident of California, You have the following rights:
      </Typography>
      <ul>
        <li>
          <strong>The right to notice.</strong> You have the right to be notified which categories of Personal Data are
          being collected and the purposes for which the Personal Data is being used.
        </li>
        <li>
          <strong>The right to request.</strong> Under CCPA, You have the right to request that We disclose information
          to You about Our collection, use, sale, disclosure for business purposes and share of personal information.
          Once We receive and confirm Your request, We will disclose to You:
          <ul>
            <li>The categories of personal information We collected about You</li>
            <li>The categories of sources for the personal information We collected about You</li>
            <li>Our business or commercial purpose for collecting or selling that personal information</li>
            <li>The categories of third parties with whom We share that personal information</li>
            <li>The specific pieces of personal information We collected about You</li>
            <li>
              If we sold Your personal information or disclosed Your personal information for a business purpose, We
              will disclose to You:
              <ul>
                <li>The categories of personal information categories sold</li>
                <li>The categories of personal information categories disclosed</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>The right to say no to the sale of Personal Data (opt-out).</strong> You have the right to direct Us
          to not sell Your personal information. To submit an opt-out request please contact Us.
        </li>
        <li>
          <strong>The right to delete Personal Data.</strong> You have the right to request the deletion of Your
          Personal Data, subject to certain exceptions. Once We receive and confirm Your request, We will delete (and
          direct Our Service Providers to delete) Your personal information from our records, unless an exception
          applies. We may deny Your deletion request if retaining the information is necessary for Us or Our Service
          Providers to:
          <ul>
            <li>
              Complete the transaction for which We collected the personal information, provide a good or service that
              You requested, take actions reasonably anticipated within the context of our ongoing business relationship
              with You, or otherwise perform our contract with You.
            </li>
            <li>
              Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or
              prosecute those responsible for such activities.
            </li>
            <li>Debug products to identify and repair errors that impair existing intended functionality.</li>
            <li>
              Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or
              exercise another right provided for by law.
            </li>
            <li>Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 et. seq.).</li>
            <li>
              Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest
              that adheres to all other applicable ethics and privacy laws, when the information's deletion may likely
              render impossible or seriously impair the research's achievement, if You previously provided informed
              consent.
            </li>
            <li>
              Enable solely internal uses that are reasonably aligned with consumer expectations based on Your
              relationship with Us.
            </li>
            <li>Comply with a legal obligation.</li>
            <li>
              Make other internal and lawful uses of that information that are compatible with the context in which You
              provided it.
            </li>
          </ul>
        </li>
        <li>
          <strong>The right not to be discriminated against.</strong> You have the right not to be discriminated against
          for exercising any of Your consumer's rights, including by:
          <ul>
            <li>Denying goods or services to You</li>
            <li>
              Charging different prices or rates for goods or services, including the use of discounts or other benefits
              or imposing penalties
            </li>
            <li>Providing a different level or quality of goods or services to You</li>
            <li>
              Suggesting that You will receive a different price or rate for goods or services or a different level or
              quality of goods or services
            </li>
          </ul>
        </li>
      </ul>
      <Typography variant="h3">Exercising Your CCPA Data Protection Rights</Typography>
      <Typography variant="body2">
        In order to exercise any of Your rights under the CCPA, and if You are a California resident, You can contact
        Us:
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">
            By email: <Link href="mailto:legal@pugsllc.com">legal@pugsllc.com</Link>
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            By visiting this page on our website:{' '}
            <Link onClick={() => navigate('/contact')}>https://axsripoff.com/contact</Link>
          </Typography>
        </li>
      </ul>
      <Typography variant="body2">
        Only You, or a person registered with the California Secretary of State that You authorize to act on Your
        behalf, may make a verifiable request related to Your personal information.
      </Typography>
      <Typography variant="body2">Your request to Us must:</Typography>
      <ul>
        <li>
          Provide sufficient information that allows Us to reasonably verify You are the person about whom We collected
          personal information or an authorized representative
        </li>
        <li>
          Describe Your request with sufficient detail that allows Us to properly understand, evaluate, and respond to
          it
        </li>
      </ul>
      <Typography variant="body2">
        We cannot respond to Your request or provide You with the required information if We cannot:
      </Typography>
      <ul>
        <li>Verify Your identity or authority to make the request</li>
        <li>And confirm that the personal information relates to You</li>
      </ul>
      <Typography variant="body2">
        We will disclose and deliver the required information free of charge within 45 days of receiving Your verifiable
        request. The time period to provide the required information may be extended once by an additional 45 days when
        reasonably necessary and with prior notice.
      </Typography>
      <Typography variant="body2">
        Any disclosures We provide will only cover the 12-month period preceding the verifiable request's receipt.
      </Typography>
      <Typography variant="body2">
        For data portability requests, We will select a format to provide Your personal information that is readily
        usable and should allow You to transmit the information from one entity to another entity without hindrance.
      </Typography>
      <Typography variant="h3">Do Not Sell My Personal Information</Typography>
      <Typography variant="body2">
        You have the right to opt-out of the sale of Your personal information. Once We receive and confirm a verifiable
        consumer request from You, we will stop selling Your personal information. To exercise Your right to opt-out,
        please contact Us.
      </Typography>
      <Typography variant="body2">
        The Service Providers we partner with (for example, our analytics or advertising partners) may use technology on
        the Service that sells personal information as defined by the CCPA law. If you wish to opt out of the use of
        Your personal information for interest-based advertising purposes and these potential sales as defined under
        CCPA law, you may do so by following the instructions below.
      </Typography>
      <Typography variant="body2">
        Please note that any opt out is specific to the browser You use. You may need to opt out on every browser that
        You use.
      </Typography>
      <Typography variant="h4">Website</Typography>
      <Typography variant="body2">
        You can opt out of receiving ads that are personalized as served by our Service Providers by following our
        instructions presented on the Service:
      </Typography>
      <ul>
        <li>
          The NAI's opt-out platform:{' '}
          <Link href="http://www.networkadvertising.org/choices/" rel="external nofollow noopener" target="_blank">
            http://www.networkadvertising.org/choices/
          </Link>
        </li>
        <li>
          The EDAA's opt-out platform{' '}
          <Link href="http://www.youronlinechoices.com/" rel="external nofollow noopener" target="_blank">
            http://www.youronlinechoices.com/
          </Link>
        </li>
        <li>
          The DAA's opt-out platform:{' '}
          <Link href="http://optout.aboutads.info/?c=2&amp;lang=EN" rel="external nofollow noopener" target="_blank">
            http://optout.aboutads.info/?c=2&amp;lang=EN
          </Link>
        </li>
      </ul>
      <Typography variant="body2">
        The opt out will place a cookie on Your computer that is unique to the browser You use to opt out. If you change
        browsers or delete the cookies saved by your browser, You will need to opt out again.
      </Typography>
      <Typography variant="h4">Mobile Devices</Typography>
      <Typography variant="body2">
        Your mobile device may give You the ability to opt out of the use of information about the apps You use in order
        to serve You ads that are targeted to Your interests:
      </Typography>
      <ul>
        <li>
          &quot;Opt out of Interest-Based Ads&quot; or &quot;Opt out of Ads Personalization&quot; on Android devices
        </li>
        <li>&quot;Limit Ad Tracking&quot; on iOS devices</li>
      </ul>
      <Typography variant="body2">
        You can also stop the collection of location information from Your mobile device by changing the preferences on
        Your mobile device.
      </Typography>
      <Typography variant="h2">
        &quot;Do Not Track&quot; Policy as Required by California Online Privacy Protection Act (CalOPPA)
      </Typography>
      <Typography variant="body2">Our Service does not respond to Do Not Track signals.</Typography>
      <Typography variant="body2">
        However, some third party websites do keep track of Your browsing activities. If You are visiting such websites,
        You can set Your preferences in Your web browser to inform websites that You do not want to be tracked. You can
        enable or disable DNT by visiting the preferences or settings page of Your web browser.
      </Typography>
      <Typography variant="h2">Children's Privacy</Typography>
      <Typography variant="body2">
        Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable
        information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child
        has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data
        from anyone under the age of 13 without verification of parental consent, We take steps to remove that
        information from Our servers.
      </Typography>
      <Typography variant="body2">
        If We need to rely on consent as a legal basis for processing Your information and Your country requires consent
        from a parent, We may require Your parent's consent before We collect and use that information.
      </Typography>
      <Typography variant="h2">Your California Privacy Rights (California's Shine the Light law)</Typography>
      <Typography variant="body2">
        Under California Civil Code Section 1798 (California's Shine the Light law), California residents with an
        established business relationship with us can request information once a year about sharing their Personal Data
        with third parties for the third parties' direct marketing purposes.
      </Typography>
      <Typography variant="body2">
        If you'd like to request more information under the California Shine the Light law, and if You are a California
        resident, You can contact Us using the contact information provided below.
      </Typography>
      <Typography variant="h2">
        California Privacy Rights for Minor Users (California Business and Professions Code Section 22581)
      </Typography>
      <Typography variant="body2">
        California Business and Professions Code Section 22581 allows California residents under the age of 18 who are
        registered users of online sites, services or applications to request and obtain removal of content or
        information they have publicly posted.
      </Typography>
      <Typography variant="body2">
        To request removal of such data, and if You are a California resident, You can contact Us using the contact
        information provided below, and include the email address associated with Your account.
      </Typography>
      <Typography variant="body2">
        Be aware that Your request does not guarantee complete or comprehensive removal of content or information posted
        online and that the law may not permit or require removal in certain circumstances.
      </Typography>
      <Typography variant="h2">Links to Other Websites</Typography>
      <Typography variant="body2">
        Our Service may contain links to other websites that are not operated by Us. If You click on a third party link,
        You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every
        site You visit.
      </Typography>
      <Typography variant="body2">
        We have no control over and assume no responsibility for the content, privacy policies or practices of any third
        party sites or services.
      </Typography>
      <Typography variant="h2">Changes to this Privacy Policy</Typography>
      <Typography variant="body2">
        We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy
        Policy on this page.
      </Typography>
      <Typography variant="body2">
        We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective
        and update the &quot;Last updated&quot; date at the top of this Privacy Policy.
      </Typography>
      <Typography variant="body2">
        You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are
        effective when they are posted on this page.
      </Typography>
      <Typography variant="h2">Contact Us</Typography>
      <Typography variant="body2">If you have any questions about this Privacy Policy, You can contact us:</Typography>
      <ul>
        <li>
          <Typography variant="body2">
            By email: <Link href="mailto:legal@pugsllc.com">legal@pugsllc.com</Link>
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            By visiting this page on our website:{' '}
            <Link onClick={() => navigate('/contact')}>https://axsripoff.com/contact</Link>
          </Typography>
        </li>
      </ul>
    </div>
  );
};

export default Privacy;
