import React, { useState } from 'react';
import { Wrapper, SectionTicket, SectionMessage, SectionInfo } from '../components/Grid';
import OmniTicketComponent from '../components/OmniTicketComponent';
import OmniSearchComponent from '../components/OmniSearchComponent';
import tickets from '../__test__/tickets.json';

type OmniContainerProps = {};

const OmniContainer: React.FC<OmniContainerProps> = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [currentBtn, setCurrentBtn] = useState<string>('');
  const switchBtn = (event: string, filter: string): void => {
    setSearchValue(filter);
    setCurrentBtn(event);
  };
  const setValue = (event: string): void => {
    setSearchValue(event);
    setCurrentBtn('');
  };
  return (
    <Wrapper>
      <SectionTicket>
        <OmniSearchComponent
          searchValue={searchValue}
          setValue={setValue}
          switchBtn={switchBtn}
          currentBtn={currentBtn}
        />
        <OmniTicketComponent tickets={tickets} />
      </SectionTicket>
      <SectionMessage />
      <SectionInfo />
    </Wrapper>
  );
};

export default OmniContainer;
