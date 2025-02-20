import { IconType } from "react-icons"; // Import IconType from react-icons
import { createStyles } from "../../theme/utils";

type ContactIconProps = {
  href: string;
  icon: IconType;
};

const ContactIcon = ({ href, icon: Icon }: ContactIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      css={contactIconStyles.contactOption}
    >
      <Icon size={50} />
    </a>
  );
};

export default ContactIcon;

const contactIconStyles = createStyles({
  contactOption: ({ colors }) => ({
    color: colors.white,
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    padding: "0 10px",
    transition: "background-color 0.3s ease",
    "&:hover": {
      color: colors.linkHover,
    },
  }),
});
