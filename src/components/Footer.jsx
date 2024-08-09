import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section>
      <div className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
          <div>
            <img
              src={logo}
              alt="hoobank"
              className="w-[266px] h-[72px] object-contain"
            />
            <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
              A new way to make the payments easy, reliable and secure.
            </p>
            <div className="flex-[1.5] flex flex-row flex-wrap w-full mt-10 md:mt-0">
              {footerLinks.map((footerLink) => (
                <div
                  key={footerLink.key}
                  className="flex flex-col ss:my-0 my-4 min-w-[150px]"
                >
                  <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white ">
                    {footerLink.title}
                  </h4>
                  <ul>
                    {footerLink.links.map((link, index) => (
                      <li
                        key={link.name}
                        className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer
                          ${
                            index !== footer.links.length - 1 ? "mb-4" : "mb-0"
                          }`}
                      >
                        {link.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  flex flex-col items-center justify-between md:flex-row pt-6border-t-[1px] border-t-[#3f3r45]">
        <p className="font-poppins font-normal text-[18px] leading-[27px] text-white ">
          2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row flex-wrap w-full mt-10 md:mt-0">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-4" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
