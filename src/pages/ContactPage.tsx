import React, { FC, ReactElement } from 'react';
import Icon from 'components/Icon';
import ContactForm from 'components/ContactForm';
import TextPageWrapper from 'components/TextPageWrapper';

const ContactPage: FC = (): ReactElement => (
  <TextPageWrapper>
    <div className="row mx-auto">
      <div className="col-md-10 mx-auto px-5">
        <h1 className="text-left pt-5">Contact</h1>
      </div>
    </div>
    <div className="row mx-auto">
      <div className="col-md-10 mx-auto px-5 py-3">
        <div className="row mx-auto">
          <Icon name="mail" className="icon" />
          General Inquiries:&nbsp;
          <a className="text-light" href="mailto:info@jeremyaaron.com?subject=general inquiry">
            info@jeremyaaron.com
          </a>
        </div>
        <div className="row mx-auto">
          <Icon name="calendar" className="icon" />
          Booking:&nbsp;
          <a className="text-light" href="mailto:dan@fromthegutmusic.com?subject=booking inquiry">
            dan@fromthegutmusic.com
          </a>
        </div>
        <div className="row mx-auto">
          <Icon name="book" className="icon" />
          General Inquiries:&nbsp;
          <a className="text-light" href="mailto:press@jeremyaaron.com?subject=general inquiry">
            press@jeremyaaron.com
          </a>
        </div>
      </div>
    </div>
    <div className="py-4">
    <ContactForm />
    </div>
  </TextPageWrapper>
);

export default ContactPage;
