import PropTypes from 'prop-types'
import React from 'react'
import icon_clock from '../images/icon_clock.png'
import icon_computer from '../images/icon_computer.png'
import icon_share from '../images/icon_share.png'
import banner_isl from '../images/banner_isl.png'
import pic03 from '../images/pic03.jpg'
import faq_meerus from '../images/faq_meerus.png'
import faq_uniqueness from '../images/faq_uniqueness.png'
import faq_research from '../images/faq_research.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="instructions"
          className={`${this.props.article === 'instructions' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Instructions</h2>
          <div className="image-with-span">
            <img src={icon_computer} alt="" />
            <span>
              This web-based assessment works best on <b>Chrome, Edge or Firefox</b> (if they are not
              your default browser, copy and paste the link to one of those browsers). Meerus the
              chatbot will guide you through the various sections. The questions are accompanied by
              images, so pick on the images that reflect the way you naturally behave or interact rather
              than how you think you should behave. There are no right or wrong answers. We
              recognize that your responses to some of the questions could be a “maybe” or “it
              depends”. Go with your instinctive response and what you are likely to do most often.
            </span>
          </div>
          <div className="image-with-span">
            <img src={icon_clock} alt="" />
            <span>
              The test will take approximately 25-30 minutes to complete. For a good user experience,
              we request that you complete the assessment in one sitting. The time you take to
              complete will depend on whether you respond instinctively or give a lot of care and
              thought to your responses. There are open-ended questions that require a written
              response. Please try and respond to the questions as you would in a work setting. Our
              advice is to relax, reflect and have fun!
            </span>
          </div>
          <div className="image-with-span">
            <img src={icon_share} alt="" />
            <span>
              The current beta version is limited to four profiles. More profiles and strategies to
              develop your intercultural competence will be available in the final release version.
              Thank-you for contributing to our research. It would be very helpful <b>if you could share
              this beta test across your networks</b> and to whomever you feel would benefit or be
              interested in such an assessment.
            </span>
          </div>
          <a style={{cursor: 'pointer'}} onClick={() => { this.props.onCloseArticle(false); setTimeout(() => this.props.onOpenArticle('faq', true), 500)}}>Still have questions? Check out our <b class="pink">FAQs</b></a>!
          {close}
        </article>

        <article
          id="faq"
          className={`${this.props.article === 'faq' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Frequently Asked Questions</h2>
          <p>
            Hello, I’m Meerus! My name comes from the Latin “mirus” which means wonderful, marvelous, surprising,
            awesome and amazing. I find cultures fascinating and complex.  I have learned that like the motherboard
            in a computer, holds, links and allows communication between all the components of a system, culture and
            cultural values are what binds a group of people to each other. In the future, I will be powered by AI. 
            I learn from my interactions with you and so the more you share the more I learn.
          </p>
          <div className="image-with-span">
            <img src={faq_meerus} alt="Meerus" />
            <span>
              <i>Here are some of the questions that I am often asked!</i>
            </span>
          </div>
          <ol>
            <li>
              <h4>What is MAPLE and what makes it different from other cultural assessment tools?</h4>
              <p>Walk into any Canadian workplace, and you will find yourself working with first generation immigrants, internationally educated professionals, and Canadian born individuals from various ethno-cultural backgrounds. The <b>Mutual Acculturation Profile & Learning Engine (MAPLE)</b> is a comprehensive assessment model that measures cognitive diversity or diversity of thought by assessing cultural style, the communication style, and intercultural competence for individuals, teams and organizations.  MAPLE provides the most objective and universal measurement of the ability and potential to embrace and integrate diversity. It is an intercultural competency development platform that allows individuals, teams and organizations to assess and grow their intercultural competency. MAPLE is proudly Canadian and the first comprehensive cultural model built in Canada by Rotman School of Management and Nexxt Intelligence Inc.</p>  
              <p>The assessment should take no longer than 10 - 20 minutes to complete and includes a variety of questions designed to identify and understand your cultural values. Here is a list of the types of questions you would expect to answer (not exhaustive):</p>
              <ul>
                <li>Demographic questions</li>
                <li>Scenario-based questions</li>
                <li>Behavioural questions</li>
                <li>Role-playing questions</li>
              </ul>
            </li>
            <li>
              <h4>What can I learn about myself from the profile given?</h4>
              <p>Your profile will include insights on your cultural values, how it may impact your decisions at the workplace, and how you could better manage a diverse team. Your profile is created by your responses and focuses on two key cultural continuums: your Identity and Power Distance.</p>
              <p><b>What is Identity?</b> After completing a project, do you celebrate the team’s success or would you prefer being singled out and praised as an individual? Individualism and Collectivism focuses on how society views the self. Individualistic cultures see the self as independent and tend to value individual achievements whereas Collectivistic cultures are highly interdependent. To learn more, please <a class="pink" target="_blank" href="https://www.mindtools.com/pages/article/seven-dimensions.htm">click here</a>.</p>
              <p><b>What is Power Distance?</b> At your workplace, do you expect your manager to consult the team before making a decision? Are you comfortable going into your manager’s office and asking for a promotion when you think you deserve it? Both of these examples are related to Power Distance and how a society handles inequalities amongst people. To learn more, please <a class="pink" target="_blank" href="https://hi.hofstede-insights.com/national-culture">click here</a>.</p>
              <p>Please note that there is no better or worse cultural continuum. Everyone lands differently on the spectrum and research supports that there are benefits on each end. Overall, our objective is to broaden your understanding of the impact of culture and empower you and others to join the conversation of creating a more productive and interculturally competent workplace in Canada.</p>
            </li>
            <li>
              <h4>How many profiles are there currently? Where did the profile names come from?</h4>
              <p>There are currently four profiles. By participating in the MAPLE BETA assessment,  you will be contributing to our research in order to create more diverse profiles. With more data, we can further our research and analysis.</p>
              <p>To be a truly global assessment, the profile names should not have associations with words in any language, as we all have reactions and interpretations with words. The profile names and the quotes in each profile was developed by the Intercultural Skills Lab. Maybe some words sound similar to a language you speak!</p>
            </li>
            <li>
              <h4>How can the MAPLE assessment be implemented in the workplace?</h4>
              <p>Once the MAPLE assessment is rolled out, it will help facilitate more effective collaboration across employees, as every individual will have a better understanding of each person’s cultural values and work styles. Being more aware and respectful of how an individual operates is vital in allowing for successful teamwork.</p>
            </li>
            <li>
              <h4>Is this like any personality or mental tests I might have taken before?</h4>
              <p>The MAPLE tool assesses you on values and behavior that are deeply rooted in culture and is used to delve deeper into your culture, working styles, and values. Take a look at the pyramid below for differences between personality, culture, and human nature.</p>
              <center><img src={faq_uniqueness} alt="Human Uniqueness" /></center>
            </li>
            <li>
              <h4>Do I need to be fluent in the language I’m taking the assessment in?</h4>
              <p>To ensure accurate profile results, participants should have a working knowledge of English. Our purpose in creating easy, universal images is so that people who are not highly fluent could still take the assessment. While MAPLE is currently only available in English, as the tool evolves, we plan on potentially offering the assessment in French, Spanish, Mandarin, and more.</p>
            </li>
            <li>
              <h4>What research are the profiles based on?</h4>
              <p>The MAPLE assessment tool is built from our research and the four profiles currently available reflect our data gathered thus far. In August 2016, The Intercultural Skills Lab conducted a global-scale study on cultural style in 130 countries. The study evaluated 17 dimensions of culture based on cultural and intercultural communication theories (Image 1). The purpose of this study was an updated understanding of cultural orientation by country of birth, country of residence, gender, age, etc. Alongside secondary research from research experts in Cultural Style, Communication Style, and Cross-Cultural Competency, our study had three important conclusions:</p>
              <ol>
                <li>The deepest layer of culture that is often less aware and less articulated but tends to be the fundamental driving force of observed behavior and preferences is the Cultural DNA.</li>
                <li>There is a need for a truly global perspective on cultural dimensions and not simply from the established Anglo-Saxon point-of-view.</li>
                <li>To reflect today’s Canada, the focus must be on integration rather than adaptation.</li>
              </ol>
              <center><img src={faq_research} alt="MAPLE Research" /></center>
            </li>
            <li>
              <h4>What vision does the Intercultural Skills Lab have for the MAPLE tool in the future? When will MAPLE be fully launched?</h4>
              <p>Our vision for MAPLE is threefold: measure both cultural profile and competency development, leverage technology to ensure minimal linguistic and cultural bias, and enable individuals, employers, and service-providers across Canada to access this tool in training programs.</p>
              <p>Our goal is to launch MAPLE by Spring 2022. The more data we collect from the MAPLE BETA, the faster we will be able to roll out the final version and the more accurate the tool can become! We hope to see MAPLE changing the conversation about culture and be an integral component of any cultural training program for organizations in Canada.</p>
            </li>
            <li>
              <h4>Where can I learn more about diversity and multiculturalism in the workplace?</h4>
              <p>To learn more about diversity and multiculturalism in the workplace, check out the <a class="pink" target="_blank" href="https://www.rotman.utoronto.ca/ProfessionalDevelopment/InterculturalSkillsLab">Intercultural Skills Lab</a> at the Rotman School of Management.</p>
            </li>
          </ol>
          <h4>Bibliography</h4>
          <ul>
            <li>Matsumoto D., Kouznetsova, N., Ray R., Ratzlaff C., Biehl M., & Raroque, J. (1999). Psychological culture, physical health, and subjective well-being. Journal of Gender, Culture, and Health, 4, 1-18.</li>
            <li>Guess, C. (2004). Decision Making in Individualistic and Collectivistic Cultures. Online Readings in Psychology and Culture, 4(1). https://doi.org/10.9707/2307-0919.1032</li>
            <li>Chen, Guo-ming, and Ran An. 2009. "A Chinese Model of Intercultural Leadership Competence." In The SAGE</li>
            <li>Handbook of Intercultural Competence, ed. Darla K. Deardorff. pp. 196-208. Thousand Oaks, CA: Sage</li>
            <li>Nwosu, Peter. 2009. "Understanding Africans’ Conceptualizations of Intercultural Competence." In The SAGE</li>
            <li>Handbook of Intercultural Competence, ed. Darla K. Deardorff. pp. 158-178. Thousand Oaks, CA: Sage.</li>
            <li>Spitzberg, Brian, and Gabrielle Changnon. 2009. "Conceptualizing Intercultural Competence.” In The SAGE Handbook</li>
            <li>Triandis, H. C.(2001). Individualism-collectivism and personality. Journal of Personality, 69, 907– 924</li>
            <li>Markus, H. R. & Kitayama, S. (1991). Culture and the self: Implications for cognition, emotion, and motivation. Psych Review, 98, 224-253.</li>
            <li>Bennett, Milton. 1993. "Toward Ethnorelativism: A Developmental Model of Intercultural Sensitivity." In Education for the Intercultural Experience, ed. R. Michael Paige. pp. 21-71. Yarmouth, ME: Intercultural Press.</li>
            <li>Byram, Michael. 1997. Teaching and Assessing Intercultural Communicative Competence. Clevedon: Multilingual Matters of Intercultural Competence, ed. Darla K. Deardorff. pp. 2-52. Thousand Oaks, CA: Sage.</li>
            <li>Zaharna, R.S. 2009. "An Associative Approach to Intercultural Communication Competence in the Arab World.” In The SAGE Handbook of Intercultural Competence, ed. Darla K. Deardorff. pp. 179-195. Thousand Oaks, CA: Sage.</li>
          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main no-overlay">
            <img src={banner_isl} alt="Intercultural Skills Lab - Banner" />
          </span>
          <p>
            Culture is diverse, vibrant, complex and intricate and the MAPLE (Mutual Acculturation Profile
            and Learning Engine) cultural assessment tool captures this richness and energy in its design
            and structure. Using a gamified and visual approach the tool offers insights into how cultural
            values influence our behaviour and communication styles in the workplace. Led by our friendly
            chat-bot Meerus the user experience is engaging, interactive and self-reflective.
          </p>
          <p>
            Traditionally culture has been associated with the countries it resides in. Current cultural
            assessment tools often use national boundaries as a proxy for culture and provide profiles in
            relation to a nationality. What makes MAPLE unique, is that, it captures both cultural values and
            communicating styles to create profiles that are not localized and set in nationality. The MAPLE
            reports use profile names that are synthetic and imaginary but the cultures they represent are
            real and are reflective of the cultural identities that globalization influences and enhances.
          </p>
          <p>
            The Intercultural Skills Lab at Rotman promotes a deeper understanding of intercultural
            competencies to support individuals and organizations to function effectively across cultures.
            When a person learns about the cultural values that drive them, they gain a real understanding
            of why they behave, interact and communicate the way they do and how others perceive and
            relate to them. This understanding can be used to improve their daily interactions in any cross-
            cultural situation, adapt to different work environments and create inclusive teams and
            workplaces.
          </p>
          {close}
        </article>

        <article
          id="share"
          className={`${this.props.article === 'share' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Share</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form action="https://getform.io/f/c1bcca87-de02-4091-a305-8522e03cc995" method="POST">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
