import React from "react";

export default function Terms() {
  return (
    <div className="section py-4 lg:py-6 xl:py-8">
      <div className="container max-w-lg">
        <div className="page-wrap panel vstack gap-4 lg:gap-6 xl:gap-8">
          <header className="page-header panel vstack justify-center gap-2 lg:gap-4 text-center">
            <div className="panel">
              <h1 className="h3 lg:h1 m-0">Terms and Conditions</h1>
            </div>
          </header>
          <div className="page-content panel fs-6 md:fs-5">
            <p>
              These Terms and Conditions ("Terms") govern your use of the Windsor Taekwondo website located at https://windsortaekwondo.com ("Website") and any services, classes, or programs offered by Windsor Taekwondo ("Services"). By accessing or using our Website or Services, you agree to be bound by these Terms. If you do not agree, please do not use our Website or Services.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Eligibility</h3>
            <p>
              Our Website and Services are intended for individuals of all ages. However, if you are under the age of 18, you must have the permission of a parent or legal guardian to participate in classes or submit personal information through our Website.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Use of the Website</h3>
            <ul className="list list-bullets">
              <li>You agree to use the Website only for lawful purposes and in accordance with these Terms.</li>
              <li>You agree not to misuse, interfere with, or disrupt the operation of the Website.</li>
              <li>You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the Website without express written permission from Windsor Taekwondo.</li>
            </ul>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Free Trial Bookings</h3>
            <p>
              Booking a free trial lesson through our Website does not create a contract of membership or guarantee admission. Windsor Taekwondo reserves the right to accept or reject any booking request at our sole discretion.
            </p>
            <p>
              Participants in free trial sessions must complete any required health and consent forms and may be required to obtain parental or guardian consent if under 18 years of age.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Membership and Payment</h3>
            <p>
              Membership enrollment in Windsor Taekwondo is subject to acceptance of additional membership terms and conditions, including payment of applicable fees. Windsor Taekwondo reserves the right to change membership fees, class schedules, or available services with reasonable notice.
            </p>
            <p>
              Late or non-payment may result in suspension or termination of membership access.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Health and Safety</h3>
            <p>
              You understand that participating in martial arts activities involves physical exertion and carries inherent risks. By participating, you voluntarily assume all associated risks, including the risk of personal injury.
            </p>
            <p>
              Participants are responsible for informing instructors of any medical conditions, injuries, or limitations before participating in any class.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by law, Windsor Taekwondo and its instructors, staff, and affiliates are not liable for any injury, loss, damage, or expenses incurred as a result of using our Website, participating in our classes, or relying on information provided through the Website.
            </p>
            <p>
              Windsor Taekwondo provides information on the Website "as is" without warranties of any kind, either express or implied.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Intellectual Property</h3>
            <p>
              All content on the Website, including but not limited to logos, text, graphics, photos, videos, and designs, is the intellectual property of Windsor Taekwondo and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              Unauthorized use of any materials found on the Website is strictly prohibited.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Privacy</h3>
            <p>
              Your use of the Website and Services is also governed by our{" "}
              <a href="/privacy" className="link">
                Privacy Policy
              </a>
              . Please review it carefully to understand our practices regarding your personal data.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Third-Party Links</h3>
            <p>
              Our Website may contain links to third-party websites or services that are not owned or controlled by Windsor Taekwondo. We are not responsible for the content, privacy policies, or practices of any third parties.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Termination</h3>
            <p>
              Windsor Taekwondo reserves the right to terminate or restrict your access to the Website or Services without notice if we believe you have violated these Terms or engaged in unlawful or inappropriate behavior.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Indemnification</h3>
            <p>
              You agree to indemnify, defend, and hold harmless Windsor Taekwondo, its instructors, staff, and affiliates from any claims, liabilities, damages, losses, or expenses (including legal fees) arising out of your use of the Website or Services, your violation of these Terms, or your violation of any rights of a third party.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Changes to Terms</h3>
            <p>
              Windsor Taekwondo may update these Terms at any time. Changes will be effective immediately upon posting on the Website unless otherwise noted. Your continued use of the Website or Services after any changes indicates your acceptance of the updated Terms.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Governing Law</h3>
            <p>
              These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising under or related to these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Contact Us</h3>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> hello@windsortaekwondo.com<br />
              {/* <strong>Address:</strong> Windsor Taekwondo, Windsor & Maidenhead, UK */}
            </p>
          </div>
          <div className="page-footer panel">
            <p className="fs-7 opacity-60 m-0">Last updated: 28 Apr, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
