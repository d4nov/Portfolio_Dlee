import { Col, Row } from "react-bootstrap";
import AnimationLottie from "@/components/share/animation-lottie";
import codingJSON from "assets/lottie/coding.json";
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";
import GlowCard from "components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "components/sections/divider";
import { APP_DATA } from "helpers/data";
import SocialMedia from "components/sections/social.media";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <Row>
        <Col md={6} xs={12}>
          <h3 className="text-center mb-md-5 mb-2">
            <span className="brand-red">{t("aboutMe.title")}</span>{" "}
          </h3>
          <div>
            <div>
              <p> {t("aboutMe.desc1")}</p>

              <p> {t("aboutMe.desc2")}</p>

              <p> {t("aboutMe.desc3")}</p>
            </div>
          </div>
          <div>
            <p>{t("aboutMe.hobbies")}</p>
            <ul>
              <li>{t("aboutMe.hobbie1")}</li>
              <li>{t("aboutMe.hobbie2")}</li>
              <li>{t("aboutMe.hobbie3")}</li>
            </ul>
          </div>
          <div>
            <p className="text-center brand-red">{t("aboutMe.quote")}</p>
            <p className="text-center brand-red">{t("aboutMe.quoteAuthor")}</p>
          </div>
        </Col>
        <Col
          md={6}
          xs={12}
          className="d-flex align-items-center justify-content-center"
        >
          <AnimationLottie width="80%" animationPath={codingJSON} />
        </Col>
      </Row>

      <Row>
        <Col
          md={6}
          xs={12}
          className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
        >
          <AnimationLottie
            width="50%"
            animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
          />
        </Col>
        <Col md={6} xs={12} className="mt-md-5 mt-3">
          <div className="d-flex flex-column align-items-center gap-3">
            <div>
              <h4 className="text-center brand-red">{t("aboutMe.edu")}</h4>
            </div>
            <div>
              <GlowCard identifier={`experience-5`}>
                <div className="p-3 relative">
                  <div className="experience-container">
                    <div className="duration-text">
                      <p>2019-2024</p>
                    </div>
                    <div className="details">
                      <div className="icon">
                        <FaGraduationCap size={36} />
                      </div>
                      <div className="info">
                        <p className="title">{t("aboutMe.major")}</p>
                        <p className="company">{t("aboutMe.university")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </Col>
      </Row>

      <Divider />
      <Row>
        <Col md={6} xs={12} className=" mt-md-5 mt-3">
          <h3 className="mb-md-5 mb-2">{t("aboutMe.contact")}</h3>
          <SocialMedia
            linkedin={APP_DATA.LINKEDIN_URL}
            instagram={APP_DATA.INSTAGRAM_URL}
            facebook={APP_DATA.FACEBOOK_URL}
          />
        </Col>
        <Col
          md={6}
          xs={12}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <AnimationLottie
            width="50%"
            animationPath={JSON.parse(CONTACT_LOTTIE)}
          />
          <h4 className="text-center">Contact me</h4>
        </Col>
      </Row>
      <div className="mb-5"></div>
    </>
  );
};

export default About;
