import Image from "next/image";
import styles from "./Footer.module.scss";
import { ArrowRight } from "react-feather";

type TFooterLinksMenuProps = {
  linkTitle: string;
  links: string[];
};

function FooterLinksMenu({ linkTitle, links }: TFooterLinksMenuProps) {
  return (
    <div className={styles.footerLinksMenu}>
      <div className={styles.footerLinksTitle}>{linkTitle}</div>
      {links.map((link) => {
        return (
          <div className={styles.footerLink} key={link}>
            {link}
          </div>
        );
      })}
    </div>
  );
}

const footerLinks = [
  {
    linkTitle: "Categories",
    links: ["Bedroom", "Living room", "Kitchen", "Home office", "Outdoor"],
  },
  {
    linkTitle: "Categories",
    links: ["Bedroom", "Living room", "Kitchen", "Home office", "Outdoor"],
  },
  {
    linkTitle: "Categories",
    links: ["Bedroom", "Living room", "Kitchen", "Home office", "Outdoor"],
  },
];

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <div className={styles.footerInfoContainer}>
          <h4 className={styles.footerInfoTitle}>
            Big savings for hongo family members!
          </h4>
          <p className={styles.footerInfoText}>
            For a limited time we are hongo family members with deals on
            furniture! Join now and start saving!
          </p>
          <span className={styles.footerInfoLink}>
            FIND A LOCAL STORE <ArrowRight size={13} />
          </span>
        </div>
        {footerLinks.map((item, id) => {
          return (
            <FooterLinksMenu key={id} linkTitle={item.linkTitle} links={item.links} />
          );
        })}
      </div>
      <div className={styles.footerBottom}></div>
      <Image
        className={styles.footerBg}
        alt="Footer bg"
        fill
        src="https://hongotheme.myshopify.com/cdn/shop/files/footer-bg.jpg?v=1664184355"
      />
    </footer>
  );
}

export default Footer;
