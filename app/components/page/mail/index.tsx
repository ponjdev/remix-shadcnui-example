
import {  MailLayout } from "~/components/page/mail/modules/mail-layout";
import { accounts, mails } from "~/components/page/mail/data/data";

export default function MailPage() {
 
  return (
    <>
      <div className="hidden flex-col md:flex">
        <MailLayout
          accounts={accounts}
          mails={mails}
          defaultLayout={undefined}
          defaultCollapsed={undefined}
          navCollapsedSize={4}
        />
      </div>
    </>
  );
}
