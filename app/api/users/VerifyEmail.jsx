import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Section,
  Text,
} from "@react-email/components";

export const VerifyEmailTemplate = ({ name, url }) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://res.cloudinary.com/dgifbfrgm/image/upload/v1744179404/logo_tqe0tl.png"
          width="225"
          height="65"
          alt="ZamZam Graphics"
          style={logo}
        />
        <Text style={paragraph}>Hi {name},</Text>
        <Text style={paragraph}>
          Welcome to ZamZam Graphics. Please click the button below to confirm
          your email address and activate your account.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href={url}>
            Click here to Confirm Now
          </Button>
        </Section>
        <Text style={paragraph}>
          Regards,
          <br />
          System Administrator
          <br />
          ZamZam Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Copyright ©2025 ZamZam Graphics | All rights reserved.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default VerifyEmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#84CC16",
  borderRadius: "3px",
  color: "#000000",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  textAlign: "center",
};
