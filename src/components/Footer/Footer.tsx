import Container from "@mui/material/Container";
import { classFooter, infoTextFooter, infoTextFooter2 } from "./FooterStyle";
import LogoComponent from "../LogoComponent/LogoComponent";
import Typography from "@mui/material/Typography";
import Phone from "../../assets/icons/Phone.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import Youtube from "../../assets/icons/Youtube.svg";
import LinkedIn from "../../assets/icons/Linkedin.svg";
import UnitedSTate from "../../assets/icons/UnitedSTate.svg";
import Arrow from "../../assets/icons/Arrow.svg";

function Footer() {
  const RRSS: Array<string> = [Instagram, Facebook, Twitter, Youtube, LinkedIn];
  const infoFooter = [
    {
      title: "Our company",
      element: [
        { detail: "About us" },
        { detail: "FAQ" },
        { detail: "Partnerships" },
        { detail: "Sustainability" },
        { detail: "Blog" },
      ],
    },

    {
      title: "How can we help",
      element: [
        { detail: "Place a ticket" },
        { detail: "Track your order" },
        { detail: "Help center" },
      ],
    },

    {
      title: "Information",
      element: [
        { detail: "Contact us" },
        { detail: "Live chat" },
        { detail: "Privacy" },
        { detail: "Terms of use" },
      ],
    },
  ];

  return (
    <Container sx={classFooter} maxWidth={false}>
      <div className="grid grid-cols-4 gap-10 ml-20 pt-20 mt-10">
        <div className="space-y-12">
          <LogoComponent />
          <Typography variant="h5" sx={infoTextFooter}>
            We sell custom products for all your needs. Packs and bulk products
            that you will enjoy.
          </Typography>

          <div className="flex space-x-2 mt-5">
            <img src={Phone} alt="" />
            <p>+1-202-555-0129</p>
          </div>

          <div className="flex space-x-4 mt-5">
            {RRSS.map((element: string, index: number) => {
              return <img src={element} key={index} />;
            })}
          </div>
        </div>

        {infoFooter.map((title: any, key: number) => {
          return (
            <div key={key}>
              <span className="title-footer">{title.title}</span>
              <div className="space-y-6 mt-5">
                {title.element.map((element: any, index: number) => {
                  return (
                    <p key={index} className="itemsListFooter">
                      {element.detail}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-between mb-18 space-x-5 mt-10 items-center px-14">
        <Typography sx={infoTextFooter2}>
          © 2022 Customer Products. All rights reserved.
        </Typography>
        <div className="flex space-x-5">
          <div className="flex space-x-1">
            <p className="text-unidet-state">Region:</p>
            <img src={UnitedSTate} width="16" height="11" />
            <p className="text-black-united">United States</p>
            <img src={Arrow} width="11" height="11" />
          </div>
          <div className="flex space-x-1">
            <p className="text-unidet-state">Language::</p>
            <p className="text-black-united">English</p>
            <img src={Arrow} width="11" height="11" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
