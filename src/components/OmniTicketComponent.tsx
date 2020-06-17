import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

export type ResultsProps = {
  ticket_id: string;
  created_by: string | null;
  created_at: string | null;
  updated_at: string | null;
  channel: string | null;
  status_type: string | null;
  customer: string | null;
  assigned_to: string | null;
  remark: string | null;
  latest_signal: string | null;
  case: string | null;
  case_status: string | null;
  insured_dob: string | null;
};
type OmniTicketComponentProps = {
  tickets: {
    count: number;
    next: string;
    previous: string | null;
    results: ResultsProps[];
  };
};

const Wrapper = Styled.div`
  /* border: 1px solid black; */
  /* padding-top: 10px; */
  margin-top: 20px;
  flex: 1;
  overflow-y: scroll;
`;
const TicketBox = Styled.div`
  cursor: pointer;
  padding: 1rem 0.5rem;
  font-size: 14px;
  width: 282px;
  height: 100px;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: black;
  border: 1px solid #EBEFF3;
  border-radius: 10px;
  background: white;
  outline: none;
`;
const Section = Styled.div`
  display: flex;
  /* justify-content: space-around; */
`;
const Customer = Styled.div`
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 1rem;
`;
const Assigned = Styled.div`
  font-size: 14px;
  color: grey;
  padding-bottom: 0.5rem;
  
`;
const AssignedUser = Styled.div`
  color: black;
  display: flex;
`;
const BlockChannel = Styled.div`
  border: 1px solid black;
  flex: 1;
`;
const BlockInfo = Styled.div`
  /* border: 1px solid black; */
  flex: 3;
`;
const BlockMessage = Styled.div`
  /* border: 1px solid black; */
`;

const OmniTicketComponent: React.FC<OmniTicketComponentProps> = (props) => {
  const { tickets } = props;
  return (
    <Wrapper>
      {tickets.results.map((item) => (
        <TicketBox key={item.ticket_id}>
          {/* <Section>
            <BlockChannel>
              <img src="#" alt="?" />
            </BlockChannel>
            <BlockInfo>
              <Customer>{item.customer}</Customer>
              <AssignedUser>
                <Assigned>Оператор:</Assigned>
                {item.assigned_to}
              </AssignedUser>
              <AssignedUser>
                <Assigned>Статус:</Assigned>
                {item.status_type}
              </AssignedUser>
            </BlockInfo>
          </Section>
          <Section>
            <BlockMessage>{item.latest_signal}</BlockMessage>
          </Section> */}
        </TicketBox>
      ))}
    </Wrapper>
  );
};

// OmniTicketComponent.defaultProps = {
//   tickets: {
//     previous: ''
//   }
// };
// OmniTicketComponent.propTypes = {
//   tickets: PropTypes.shape({
//     count: PropTypes.number.isRequired,
//     next: PropTypes.string.isRequired,
//     previous: PropTypes.oneOf([null]),
//     results: PropTypes.array.isRequired
//     // results: PropTypes.arrayOf({
//     //   ticket_id: PropTypes.string.isRequired,
//     //   created_by: PropTypes.string.isRequired,
//     //   created_at: PropTypes.string.isRequired,
//     //   updated_at: PropTypes.string.isRequired,
//     //   channel: PropTypes.string.isRequired,
//     //   status_type: PropTypes.string.isRequired,
//     //   customer: PropTypes.string.isRequired,
//     //   assigned_to: PropTypes.string.isRequired,
//     //   remark: PropTypes.string.isRequired,
//     //   latest_signal: PropTypes.string.isRequired,
//     //   case: PropTypes.string.isRequired,
//     //   case_status: PropTypes.string.isRequired,
//     //   insured_dob: PropTypes.string.isRequired
//     // }).isRequired
//   })
// };

export default OmniTicketComponent;
