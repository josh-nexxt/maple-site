import PropTypes from 'prop-types'
import React from 'react'
import NOUCHUKI_PROFILE_PDF from '../pdf/NOUCHUKI_PROFILE.pdf';
import RILSUKYA_PROFILE_PDF from '../pdf/RILSUKYA_PROFILE.pdf';
import ANJOGEY_PROFILE_PDF from '../pdf/ANJOGEY_PROFILE.pdf';
import WALTHANOO_PROFILE_PDF from '../pdf/WALTHANOO_PROFILE.pdf';
import profile_bridge_250 from '../images/profile_bridge_250.png'
import profile_bridge_500 from '../images/profile_bridge_500.png'
import profile_waterfall_250 from '../images/profile_waterfall_250.png'
import profile_waterfall_500 from '../images/profile_waterfall_500.png'
import profile_beehive_250 from '../images/profile_beehive_250.png'
import profile_beehive_500 from '../images/profile_beehive_500.png'
import profile_beach_250 from '../images/profile_beach_250.png'
import profile_beach_500 from '../images/profile_beach_500.png'
import banner_isl from '../images/banner_isl.png'
import faq_meerus from '../images/faq_meerus.png'
import faq_uniqueness from '../images/faq_uniqueness.png'
import faq_research from '../images/faq_research.png'

class LandingMain extends React.Component {
  render() {
    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        className="landing"
        style={{display: this.props.timeout ? 'block' : 'none', minWidth: '100%'}}
      >
        <article
          id="faq"
          className={`no-popup ${this.props.article === 'faq' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none', textAlign: 'left' }}
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
        </article>

        <article
          id="about"
          className={`no-popup ${this.props.article === 'about' ? 'active' : ''} ${
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
        </article>

        <article
          id="profiles"
          className={`no-popup ${this.props.article === 'profiles' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Profiles</h2>
          <h4>Click on any of the cultural profiles to learn more!</h4>
          <div className="profiles-container">
            <div onClick={() => this.props.onOpenArticle('nouchuki')}>
              <img src={profile_beehive_250} alt="#1" />
              <h3>NOUCHUKI</h3>
            </div>
           <div onClick={() => this.props.onOpenArticle('anjogey')}>
              <img src={profile_bridge_250} alt="#2" />
              <h3>ANJOGEY</h3>
            </div>
            <div onClick={() => this.props.onOpenArticle('rilsukya')}>
              <img src={profile_beach_250} alt="#3" />
              <h3>RILSUKYA</h3>
            </div>
            <div onClick={() => this.props.onOpenArticle('walthanoo')}>
              <img src={profile_waterfall_250} alt="#4" />
              <h3>WALTHANOO</h3>
            </div>
          </div>
        </article>

        <article
          id="nouchuki"
          className={`no-popup ${this.props.article === 'nouchuki' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">NOUCHUKI</h2>
          <div className="profile">
            <div className="profile-image">
              <img src={profile_beehive_500} alt="Nouchuki Profile Picture" />
            </div>
            <div className='profile-description'>
              <h4>pronounced as <i>noo-chu-ki</i></h4>
              <p>
                <b>Nouchuki</b>, the 24-hour industrial powerhouse that is as deeply traditional as it is futuristic, is the perfect
                place for you to work and live. Like the Nouchukiian rainbow cake, Muzkeros, you are layered – and your
                past, present and future are distinct parts of your identity subtly woven together in an iridescent hue.
                Like all Nouchukiians, you value your community and its traditions, and are defined by the close bonds
                that create a sense of unity and belonging. The Nouchukiians respect hierarchy and structure and this
                orientation leads to the development of reliable internal processes, systems and control mechanisms
                that ensure stability. You respect the wisdom of leaders and uphold their authority.
              </p>
              <p>
                In the workplace, you are efficient, skilled, and deeply rooted in an “all for one and one for all” mindset.
                You are happiest when working behind the scenes toward a common goal. You value humility and have
                a tendency to underplay your accomplishments and may not always receive the accolades you deserve.
                At work, you’re a responsible employee, so people easily
                depend on you. You can be ambitious, more often not just for yourself, but also for your colleagues;
                and you will step-up and support team- members to ensure that your team meets its goals or targets.
              </p>
              <p>
                When in a leadership role, you prefer to be supportive and directive. You work on forging a sense of commitment
                and loyalty and focus on maintaining group harmony to inspire improved performance and productivity.
                Nouchukiians have an innate desire to connect with others and as a leader you like to make the effort to know
                what drives and motivates your team. In making decisions you factor in what others need—or at least
                what you think they need. Instinctively, when making decisions or resolving conflict you use evaluative
                criteria that show a high concern for everyone’s needs and will often search for alternative solutions
                that can satisfy the majority.
              </p>
              <p>
                Nouchukiians are helpful and generally willing to help not just those in their immediate circle, but
                anyone from their network who reaches out for information or support. They see complying to these
                requests as their obligation and duty. Nouchukiians value wisdom and learning, and these interactions
                often motivate them as they are seen as an opportunity to learn and grow. In turn, they expect the
                same consideration from their colleagues. They believe in the golden rule—do to others what you would
                like done to you.
              </p>
              <h3 class="pink">Cultural values that drive you:</h3>
              <h4 class="pink">dutifulness; unity; respect for wisdom; power; authority; loyalty; nurture; connection; collaboration</h4>

            </div>
          </div>
          <a href={NOUCHUKI_PROFILE_PDF} download class="button-3d btnPush btnGreen">Download Profile</a>
          <a onClick={() => this.props.onOpenArticle('profiles')} download class="button-3d btnPush btnBlue">View All Profiles</a>
        </article>


        <article
          id="rilsukya"
          className={`no-popup ${this.props.article === 'rilsukya' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">RILSUKYA</h2>
          <div className="profile">
            <div className="profile-image">
              <img src={profile_beach_500} alt="Rilsukya Profile Picture" />
            </div>
            <div className='profile-description'>
              <h4>pronounced as <i>ril-su-kiya</i></h4>
              <p>
                <b>Rilsukya</b> is your paradise. The Rilsukese are essentially warm social creatures who value their
                relationships, are supportive and make the effort to bring people together. The culture fosters strong
                relationships and as you also believe in equality and equal rights, you will often work to uplift others.
                The Rilsukese are frequently upheld for their good human rights record.
              </p>
              <p>
                You are laid back, whole-hearted, and someone who enjoys the finer things in life. The Rilsukese have a
                saying <i>“Ti cestas nianem reva kotika ed pazhi siga ti osi nianem ed zhin”</i>, which loosely translates as
                “You will never truly be satisfied by work until you are satisfied by life.” You work hard and play hard
                and your dream is to work for a company that lets you balance and integrate work and play. Arriving a little late,
                leaving a little early, joking, and chatting are just part of what makes work fun. A relaxed atmosphere
                isn’t a problem as long as the work gets done. When you can find passion in your work, you flourish.
              </p>
              <p>
                You value relationships and are good at building strong relationships as you spend time and effort to
                build trust. You believe that the best workplaces encourage friendship between coworkers. Loyalty is
                paramount and you believe that colleagues should cover for one another and help each other out.
                Organizations that are structured rigidly or where there is a strong hierarchical
                system is not where you want to be. You prefer a participative work environment and expect to be
                consulted in decision-making. As such, you feel more comfortable when you’ve run your own ideas past
                several people. After all, two heads are better than one.
              </p>
              <p>
                As a leader you see yourself in the role of a coach. You believe in being accessible and empowering your
                team to excel and thrive. For you, a good leader is a visionary who serves their team to achieve
                greatness together. As a leader, you try new things and take risks, even if that means making mistakes.
                Since nobody is perfect, you’re open about your shortcomings and encourage others to be open as well.
                You believe that teamwork is essential to company unity and success.
              </p>
              <p>
                You’re accommodating when co-workers have work-life conflicts and you expect the same in return.
                Like the Rilsukese, you want to make people smile and brighten their day—even when at work.
                You see nothing wrong with having a good time in a professional context. You just
                wish everyone saw work that way.
              </p>
              <h3 class="pink">Cultural values that drive you:</h3>
              <h4 class="pink">cooperation; reciprocity; fairness; equity; negotiation; flexible; trust; work-life symbiosis</h4>
            </div>
          </div>
          <a href={RILSUKYA_PROFILE_PDF} download class="button-3d btnPush btnGreen">Download Profile</a>
          <a onClick={() => this.props.onOpenArticle('profiles')} download class="button-3d btnPush btnBlue">View All Profiles</a>
        </article>

        <article
          id="anjogey"
          className={`no-popup ${this.props.article === 'anjogey' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">ANJOGEY</h2>
          <div className="profile">
            <div className="profile-image">
              <img src={profile_bridge_500} alt="Anjogey Profile Picture" />
            </div>
            <div className='profile-description'>
              <h4>pronounced as <i>ann-jo-gi</i></h4>
              <p>
                You are an über disciplined and determined individual. Your methodical way of thinking and efficiency
                makes <b>Anjogey</b>, an ideal place for you. Anjogians believe that winning is everything and healthy
                competition makes everyone strive to be their best. Doing a good job is not enough, you need to do it
                better than the others. You strive to be unique and expect to be recognized for your work. You are
                meticulous and a natural troubleshooter who respects the chain of command. A “matter-of-factness
                combined with elegance” marks the modern Anjogians. When you say that you are going to get
                something done, you do it, and what you create is often unusually simple and surprisingly powerful.
              </p>
                In Anjogey, people respect power and authority, but its is an impersonal power which is often
                centralized and does not invade their personal life. Control is respected but there are clear boundaries
                between public and personal spaces. The seemingly contradictory values of hierarchy and individualism
                creates a unique balance where power and authority are respected as long as it allows autonomy and
                rewards individual contributions.
              <p>
                In general, work relationships are transactional, and you are comfortable moving in and out of teams
                quickly. Indeed, you prefer keeping your personal life separate from work. You focus on getting the job
                done and you assume your work will speak for itself. Work relationships in Anjogey are collegial and can
                be sensitive but once established highly productive and rewarding. Despite your love of efficiency, you
                never rush projects. You bring a single- minded drive that focuses on doing more and better with style.
              </p>
              <p>
                You approach leadership with an unusual degree of precision. Your role as a manager is to master
                complex concepts, analyze deeply and thoroughly and make rational decisions. Your rank has privilege
                but at the same time, it is important to treat everyone on your team with respect. This means that you
                are comfortable with having long discussions with your team and being challenged on your ideas. You
                will carefully listen when your subordinates speak out, but you are also very clear that the final decision
                is yours. This style of leadership works well in Anjogey as the general outlook is that ‘everybody is
                important but not equal’.
              </p>
              <p>
                Precision and perfection are important to you in all that you do. It is important that you get things right,
                so you take the time to work carefully and avoid making mistakes. The Anjogians phrase <i>“eleyinewa
                ayelicha”</i> reflects your drive for excellence that is seen in your cities, art, products and lifestyle – high
                quality, unusual simplicity, and integrated into the ecosystem.
              </p>
              <h3 class="pink">Cultural values that drive you:</h3>
              <h4 class="pink">excellence; achievement; efficiency; autonomy; compliance; collegial; persevering; decisive; focused</h4>
            </div>
          </div>
          <a href={ANJOGEY_PROFILE_PDF} download class="button-3d btnPush btnGreen">Download Profile</a>
          <a onClick={() => this.props.onOpenArticle('profiles')} download class="button-3d btnPush btnBlue">View All Profiles</a>
        </article>


        <article
          id="walthanoo"
          className={`no-popup ${this.props.article === 'walthanoo' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">WALTHANOO</h2>
          <div className="profile">
            <div className="profile-image">
              <img src={profile_waterfall_500} alt="Walthanoo Profile Picture" />
            </div>
            <div className='profile-description'>
              <h4>pronounced as <i>wal-tha-noo</i></h4>
              <p>
                <b>Walthanoo</b> is the perfect place for you to live and work! Its filled with energy and opportunities.
                Walthanooers, like yourself, have a clear vision for their lives and they pursue their passions by pushing
                personal barriers. Independence and self-reliance are highly valued, and you believe in forging your own
                future. You value being different and know that what sets you apart makes you awesome! You don’t let
                the past drag you down or scatter your focus. Rather than avoiding mistakes, you try to learn from them
                in order to push forward as quickly as possible. Walthanooers will often say <i>‘Manken misa myju matiri’</i>
                or ‘An unfinished one is better than a flawless zero.’
              </p>
              <p>
                Like every self-respecting Walthanooer, autonomy is very important to you. You have the drive and
                energy to do whatever it takes to accomplish your work. You need people to give you the time and
                resources to complete the project and then leave you to do it on your own terms. If you need
                something, you ask for it. While others may need to check their decisions with a manager, you’re
                comfortable calling your own shots. You treat everyone equally and believe in freedom, equal
                opportunity and justice for everyone. Time is a precious commodity and you carve out time to focus on
                your goals. This leads to restricted reciprocity, that is, you are responsive and willing to help anyone
                from whom you can expect to need help in the future, irrespective of their status. You focus on
                managing your career growth and believe that doing high visibility work is crucial for your success.
              </p>
              <p>
                Being a leader requires that you are accessible and approachable. Hierarchy is for convenience and you
                rely on your team members for their expertise. You consult with your team and expect them to be self-
                reliant and take initiative. Your role as a leader is to be a facilitator and you empower your team to
                make decisions and resolve problems. The pace of change in Walthanoo, necessitates you to work in
                ways that support you team members to be engaged, on the same page and enthusiastic to embrace
                change. Being a facilitator-coach entails that you support your team members to achieve their purpose
                by creating cultures of learning and engagement that upholds their autonomy, self-determination and
                uniqueness.
              </p>
              <p>
                The Walthanoo lifestyle challenges you in many ways, both professionally and in your everyday life. You
                thrive because you are recognized for doing your own thing, being independent and it inspires you to do
                your best. You love the energy of Walthanoo and your drive and determination will help you prosper
                here.
              </p>
              <h3 class="pink">Cultural values that drive you:</h3>
              <h4 class="pink">independence; uniqueness; individuality; autonomy; self-actualization; initiative; empowerment; equality</h4>
            </div>
          </div>
          <a href={WALTHANOO_PROFILE_PDF} download class="button-3d btnPush btnGreen">Download Profile</a>
          <a onClick={() => this.props.onOpenArticle('profiles')} download class="button-3d btnPush btnBlue">View All Profiles</a>
        </article>

        <article
          id="contact"
          className={`no-popup ${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form
            action="https://getform.io/f/c1bcca87-de02-4091-a305-8522e03cc995"
            method="POST"
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
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
        </article>
      </div>
    )
  }
}

LandingMain.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
  onOpenArticle: PropTypes.func
}

export default LandingMain
