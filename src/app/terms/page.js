import Link from 'next/link';
import styles from '../page.module.css'

export default function Page() {
  return (
    <div className={styles.tos}>
      <h1>TERMS OF SERVICE</h1>
      <p>
        <strong>Please read these Terms of Service carefully before using our weather application. These Terms govern your access to and use of the App, including any services provided through the App.</strong>
      </p>

      <p>
        By accessing or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the App.
      </p>

      
        <strong>Data Collection and Usage: </strong>
      <p>
        The App utilizes Google's authentication services via Firebase for user authentication. During the authentication process, we collect and store certain information provided by Google, including your name and email address. We use this information solely for the purpose of user authentication and to provide personalized weather-related services within the App.
      </p>

      
        <strong>Data Privacy and Security</strong>
      <p>
        We are committed to protecting your privacy and ensuring the security of your personal information. We adhere to applicable data protection laws and take reasonable precautions to safeguard your data. However, please note that no method of data transmission over the internet or electronic storage is 100% secure. We cannot guarantee the absolute security of your data.
      </p>

      
        <strong>Third-Party Services</strong>
      <p>  
        The App may incorporate third-party services, such as weather data providers or analytics tools, to enhance its functionality. These third-party services may collect additional data, and their use is governed by their respective privacy policies and terms of service. We encourage you to review those policies before using the App.
      </p>

     
        <strong>User Responsibilities</strong>
      <p>
        By using the App, you agree to:
        <br />
        a. Provide accurate and up-to-date information during the authentication process.
        <br />
        b. Keep your login credentials secure and confidential.
        <br />
        c. Use the App in compliance with applicable laws and regulations.
        <br />
        d. Refrain from using the App for any unlawful or unauthorized purposes.
      </p>

      
        <strong>Intellectual Property</strong>
      <p>
        The App and its content, including but not limited to text, graphics, images, logos, and software, are the intellectual property of the App's owners or licensors. You agree not to reproduce, modify, distribute, or create derivative works based on the App without prior written permission.
      </p>

      
        <strong>Limitation of Liability</strong>
      <p>
        To the extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the App, including but not limited to any loss of data or interruption of service.
      </p>

      
        <strong>Modifications to the Terms</strong>
      <p>
        We reserve the right to modify these Terms at any time without prior notice. By continuing to use the App after any modifications, you agree to be bound by the updated Terms.
      </p>

      
        <strong>Governing Law and Jurisdiction</strong>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of GDPR. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of GDPR.
      </p>
      <Link className={styles.tosButton} href='/'>Go back</Link>
    </div>
  );
}
