import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta("/privacy", "Privacy", "How Antel Solutions handles information submitted through this website.");

// Draft for review by the company's legal counsel before launch.
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy" updated="October 2026">
      <h2>Information you provide</h2>
      <p>
        When you contact us through this website, we receive the information you choose to share, such as your name, company,
        email address, phone number, area of interest and message.
      </p>
      <h2>How we use it</h2>
      <p>
        We use this information to respond to your inquiry and to continue any conversation you have started with us. We do not
        sell personal information.
      </p>
      <h2>Website data</h2>
      <p>
        Like most websites, our hosting provider may record basic technical information such as IP address, browser type and
        pages visited, for security and performance purposes.
      </p>
      <h2>Your choices</h2>
      <p>
        You may ask us to access, correct or delete information you have provided by contacting us through the contact page.
      </p>
      <h2>Changes</h2>
      <p>We may update this policy from time to time. The date above shows when it was last revised.</p>
    </LegalPage>
  );
}
