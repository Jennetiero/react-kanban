import { FC } from "react";
import {
  Container,
  Image,
  Field,
  Status,
  Header,
  Cardtime,
  Card,
  CompletedCardText,
  FieldBody,
  CardText,
  CompletedCard,
  CompletedCardtime,
  Button,
  StatusField,
} from "./Schedule.styled";

import { ThemeProvider } from "styled-components";

import { ScheduleData } from "../../data/ScheduleData";
import colors from "../../constants/colors";
const Schedule: FC = () => {
  return (
    <Container>
      {ScheduleData.map((item, index) => {
        return (
          <Field key={index}>
            <Header style={item.style}>
              <Status>{item.title}</Status>
              <Image src={item.image} />
            </Header>
            <FieldBody>
              {item.cards.map((card, key) => {
                if (item.title !== "Completed") {
                  return (
                    <Card key={key} style={card.backgroundColor}>
                      <CardText>{card.text}</CardText>
                      <Cardtime>{card.time}</Cardtime>
                    </Card>
                  );
                } else {
                  return (
                    <CompletedCard key={key}>
                      <CompletedCardText>{card.text}</CompletedCardText>
                      <CompletedCardtime>{card.time}</CompletedCardtime>
                    </CompletedCard>
                  );
                }
              })}
            </FieldBody>
          </Field>
        );
      })}
      <StatusField>
        <Header>
          <ThemeProvider theme={colors}>
            <Button>+ Create Status</Button>
          </ThemeProvider>
        </Header>
      </StatusField>
    </Container>
  );
};

export default Schedule;
