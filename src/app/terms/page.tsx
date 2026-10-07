import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta("/terms", "Terms", "Terms of use for the Antel Solutions website.");

// Draft for review by the company's legal counsel before launch.
export default function TermsPage() {
  return (
    <LegalPage title="Terms" updated="October 2026">
      <h2>Use of this website</h2>
      <p>
        This website provides general information about Antel Solutions. By using it, you agree to these terms. If you do not
        agree, please do not use the website.
      </p>
      <h2>No advice or offer</h2>
      <p>
        Content on this website is for general information only. It is not legal, financial, investment, tax or medical advice,
        and it is not an offer or solicitation to buy or sell any security, commodity or financial product.
      </p>
      <h2>Inquiries</h2>
      <p>Submitting an inquiry does not create a client relationship or any obligation on either party.</p>
      <h2>Intellectual property</h2>
      <p>Text, imagery and design on this website belong to Antel Solutions or its licensors and may not be reused without permission.</p>
      <h2>Limitation of liability</h2>
      <p>
        The website is provided as is. To the extent permitted by law, Antel Solutions is not liable for any loss arising from
        use of, or reliance on, this website.
      </p>
      <h2>Changes</h2>
      <p>We may update these terms from time to time. The date above shows when they were last revised.</p>
    </LegalPage>
  );
}
