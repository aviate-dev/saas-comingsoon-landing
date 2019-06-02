import React, { useState } from "react"
import { Link } from "gatsby"
import UI from "../images/Hero-1.png"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShoppingCartIcon from "../images/shopping-cart.svg"
import BoxIcon from "../images/box.svg"
import UI3 from "../images/UI3.png"
import checkMartImg from "../images/check-mark.svg"

import androidbrands from "../images/tech/android-brands.svg"
import angularbrands from "../images/tech/angular-brands.svg"
import applebrands from "../images/tech/apple-brands.svg"
import reactbrands from "../images/tech/react-brands.svg"
import vuejsbrands from "../images/tech/vuejs-brands.svg"
import ethereumbrands from "../images/tech/ethereum-brands.svg"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

import meetBuyers from "../images/meet-people.svg"

import earnImg from "../images/seller/earn.svg"
import connectImg from "../images/seller/connect.svg"
import qualityImg from "../images/seller/quality.svg"
import payImg from "../images/seller/pay.svg"
import verifiedImg from "../images/seller/verified.svg"

import addToMailchimp from "gatsby-plugin-mailchimp"

const IndexPage = () => {
  const [isInterestedInSelling, setIsInterestedInSelling] = useState(true)
  const [inputemail, setEmail] = useState("none")
  const [category, setCategory] = useState("none")
  const [hasSubscribed, setHasSubscribed] = useState(false)
 
  const handleTabChange = e => {
    console.log(e.target)
  }

  const handleEmailSignupSubmit = async e => {
    e.preventDefault()
    addToMailchimp(inputemail, { category: category }) // listFields are optional if you are only capturing the email address.
      .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data)
        setHasSubscribed(true)
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
  }

  const handleSelectUserType = e => {
    console.log(e.target.value)
    setCategory(e.target.value)
  }

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap"
        rel="stylesheet"
      />
      <section class="hero is-medium" id="sec1">
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column">
                <span class="tag is-warning">Coming Soon</span>
                <p class="title is-1 ">
                  <span class="fullstop">
                  Share the exact text from blogs
                  </span>
            
                </p>
                <br />
                <p class="subtitle is-4 has-text-weight-semibold">
                  TL;DR Use the browser extension to share short links of the exact text in the landing page which you want your friends to read.
                </p>

                <form
                  name="EmailSignup"
                  method="POST"
                  onSubmit={e => {
                    handleEmailSignupSubmit(e)
                  }}
                >
                  <div class="field ">
                    
                    <div class="control signup-form-elements">
                      <input
                        class="input is-large "
                        type="email"
                        placeholder="Email address"
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>
                    <div class="control signup-form-elements">
                      <button
                        class="button is-primary is-fullwidth is-large signup-button "
                        type="submit"
                      >
                       🌟 Signup for Free
                      </button>
                    </div>
                  </div>
                  {hasSubscribed == false ? null : (
                    <p class=" subtitle subscribing-success">
                      👍Thank you for signing up, <bold>{inputemail}</bold>. We
                      will email you once the platform is live.
                    </p>
                  )}
                </form>
              </div>

              <div class="column">
                <div class="shadow">
                  <img src={UI} class="UIimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /> <br /> <br />
      </section>

      <section class="is-primary sec-2 is-medium">
        <div class="container ">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title is-4 has-text-white">I want to</h1>

              <Tabs>
                <TabList>
                  <Tab>
                    <div class="tile is-parent">
                      <article
                        class="tile is-child box box-active is-flex"
                        name="selling"
                      >
                        <img src={BoxIcon} width={40} name="selling" />

                        <p class="subtitle is-3 has-text-white" name="selling">
                          Sell
                        </p>
                      </article>
                    </div>
                  </Tab>
                  <Tab>
                    {" "}
                    <div class="tile is-parent">
                      <article class="tile is-child box box-inactive is-flex">
                        <img src={ShoppingCartIcon} width={40} />

                        <p class="subtitle is-3 has-text-white">Buy</p>
                      </article>
                    </div>
                  </Tab>
                </TabList>
                <br />
                <br />
                <TabPanel class="tab-panel">
                  <div class="columns has-text-white">
                    <div class="column ">
                      <img src={earnImg} class="buyer-sell-icon" />
                      <div class="sec-buysell-content">
                        <h1 class="title is-3 has-text-white">Earn</h1>
                        <p class="subtitle is-5 has-text-white">
                          Get money for your hard work
                        </p>
                      </div>
                    </div>
                    <div class="column">
                      <img src={connectImg} class="buyer-sell-icon" />
                      <div class="sec-buysell-content">
                        <h1 class="title is-3 has-text-white">
                          Connect to Buyers
                        </h1>
                        <p class="subtitle is-5 has-text-white">
                          Grow your developer network and create unique
                          projects.{" "}
                        </p>
                      </div>
                    </div>
                    <div class="column">
                      <img src={qualityImg} class="buyer-sell-icon" />
                      <div class="sec-buysell-content">
                        <h1 class="title is-3 has-text-white">
                          Make Quality Projects
                        </h1>
                        <p class="subtitle is-5 has-text-white">
                          Grow your developer network and create unique
                          projects.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div class="columns has-text-white">
                    <div class="column ">
                      <img src={verifiedImg} class="buyer-sell-icon" />
                      <div class="sec-buysell-content">
                        <h1 class="title is-3 has-text-white">Verified</h1>
                        <p class="subtitle is-5 has-text-white">
                          We test the project codes and ensure smooth
                          transaction between you and the seller.
                        </p>
                      </div>
                    </div>
                    <div class="column">
                      <img src={qualityImg} class="buyer-sell-icon" />
                      <div class="sec-buysell-content">
                        <h1 class="title is-3 has-text-white">
                          Filtered Projects
                        </h1>
                        <p class="subtitle is-5 has-text-white">
                          We accept unique projects and ensure quality is
                          offered to you.
                        </p>
                      </div>
                    </div>
                    <div class="column">
                      <img src={payImg} class="buyer-sell-icon" />
                      <div class="sec-buysell-content">
                        <h1 class="title is-3 has-text-white">
                          Pay what you like
                        </h1>
                        <p class="subtitle is-5 has-text-white">
                          Place bids on projects and get the best projects
                          within your budget.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                {/* <img src={UI3} class="sec2img card" /> */}
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      <section class="hero is-small sec-meetbuyers">
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column">
                <p class="title is-3">Meet the right buyers faster!</p>
                <p class="subtitle is-5">
                  Buyers from Australia, USA, UK and many other countries have
                  already signed up! Bidzcart connects you with the right buyer.
                </p>
                <button class="button is-primary " type="submit">
                  Signup for free
                </button>
              </div>
              <div class="column">
                <img src={meetBuyers} class="meetbuyers" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section has-text-centered sec-3-outer">
        <div class="container ">
          {" "}
          <h1 class="title is-2 has-text-black">
            Get money for your SAAS projects
            {/* Dont spend $30k making your SAAS app */}
          </h1>
          <h1 class="subtitle is-4 sec-3-sub">
            Have a SAAS project sitting around making no money? No problem, this
            platform will allow you to get money for it.
            {/* Bidzcart, is a
          marketplace which allows you to buy ready made quality saas projects.
          Save time and money by using a proven product. */}
          </h1>
        </div>
        <div class="sec-3">
          <div class="columns">
            <div class="column">
              <img src={UI3} />{" "}
            </div>
            <div class="column">
              <ul>
                <li>
                  <div class="is-flex has-text-left sec-3-li">
                    <span class="icon is-large checkmarkimg">
                      <img src={checkMartImg} width={30} />
                    </span>
                    <p class="subtitle is-5 ">
                      Easy Project Submission Submit your project and get
                      verified status(approval takes upto 72hours).
                    </p>
                  </div>
                </li>
                <li>
                  <div class="is-flex has-text-left sec-3-li">
                    <span class="icon is-large checkmarkimg">
                      <img src={checkMartImg} width={30} />
                    </span>
                    <p class="subtitle is-5 ">
                      Connect and message other developers and buyers. Earn
                      reviews and points on completing tasks!
                    </p>
                  </div>
                </li>
                <li>
                  <div class="is-flex has-text-left sec-3-li">
                    <span class="icon is-large checkmarkimg">
                      <img src={checkMartImg} width={30} />
                    </span>
                    <p class="subtitle is-5 ">
                      Accept stripe and bank transfer payments. We dont want you
                      to wait 10 days to receive the money.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="section sec-technologies has-text-centered">
        <p class="subtitle is-4">Buyers are looking for products made with </p>
        <div>
          <div class="columns">
            <div class="column is-2">
              <img src={reactbrands} width="60" />
              <p class="title is-5">React</p>
            </div>
            <div class="column is-2">
              <img src={vuejsbrands} width="60" />
              <p class="title is-5">Vue.js</p>
            </div>
            <div class="column is-2">
              <img src={angularbrands} width="60" />
              <p class="title is-5">Angular</p>
            </div>
            <div class="column is-2">
              <img src={applebrands} width="60" />
              <p class="title is-5">XCode</p>
            </div>
            <div class="column is-2">
              <img src={androidbrands} width="60" />
              <p class="title is-5">Android</p>
            </div>
            <div class="column is-2">
              <img src={ethereumbrands} width="50" />{" "}
              <p class="title is-5">Ethereum</p>
            </div>
          </div>
        </div>
        <br />
        <p class="subtitle is-4">+ many more</p>
      </section>

      <section class="is-danger is-medium">
        <div class="container ">
          <div class="hero-body">
            <div class="columns">
              <div class="column is-three-quarters">
                <h1 class="title is-3 has-text-black has-text-centered">
                  Dont spend $30k making your SAAS app
                </h1>
                <h1 class="subtitle is-4 has-text-centered">
                  Signup Now and launch your next SaaS product!
                </h1>
              </div>
              <div class="column">
                <a
                  class="button is-primary is-large getStartedBtn "
                  type="submit"
                  href="#sec1"
                >
                  Get Started!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="hero is-large pricing-section">
        <div class="container">
          <div class="pricing-table-col">
            <div class=" columns ">
              <p class="title is-3 pricing-title has-text-white">Pricing</p>
              <div class="column card has-text-centered">
                <ul class=" pricing-table-li">
                  <li>
                    {" "}
                    <p class="title is-3">List Product </p>{" "}
                  </li>
                </ul>
                <ul class=" pricing-table-li">
                  <li>
                    {" "}
                    <p class="title is-4">FREE</p>
                  </li>
                </ul>
                <ul class=" pricing-table-li">
                  <li>
                    {" "}
                    <p class="subtitle is-5">
                      Submit your project and meet unlimited buyers
                    </p>
                  </li>
                </ul>

                <a
                  class="button is-primary getStartedBtn is-fullwidth "
                  type="submit"
                  href="#sec1"
                >
                  Get Started!
                </a>
              </div>
              <div class="column card has-text-centered">
                <ul class=" pricing-table-li">
                  <li>
                    {" "}
                    <p class="title is-3">Get Featured </p>
                  </li>
                </ul>
                <ul class=" pricing-table-li">
                  <li>
                    {" "}
                    <p class="title is-4">$25/week </p>
                  </li>
                </ul>

                <ul class=" pricing-table-li">
                  <li>
                    {" "}
                    <p class="subtitle is-5">
                      Get featured on homepage and increase your visibility
                    </p>
                  </li>
                </ul>
                <a
                  class="button is-primary getStartedBtn  is-fullwidth "
                  type="submit"
                  href="#sec1"
                >
                  Get Started!
                </a>
              </div>
              <div class="column card has-text-centered">
                <ul class=" pricing-table-li">
                  <li>
                    {" "}
                    <p class="title is-3 ">Get Verified </p>
                  </li>
                </ul>
                <ul class=" pricing-table-li ">
                  <li>
                    {" "}
                    <p class="title is-4">$249/listing </p>
                  </li>
                </ul>
                <ul class=" pricing-table-li">
                  <li>
                    {" "}
                    <p class="subtitle is-5">
                      We will verify your deliverables so you can sell faster
                    </p>
                  </li>
                </ul>

                <a
                  class="button is-primary getStartedBtn is-fullwidth "
                  type="submit"
                  href="#sec1"
                >
                  Get Started!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="faq-section">
        <div class="container ">
          <p class="title is-3 pricing-title has-text-centered">FAQ</p>
          <p class="subtitle has-text-centered faq-sub">
            We're at the beginning of an exciting journey and we understand
            there may be lots of questions. We've included some of the most
            popular below. For other questions, send us a message on live chat.
          </p>
          {/* start of row */}
          <div class="is-inline">
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Can I list for free?</p>
                  <a class="card-header-icon" aria-label="more options">
                    <span class="icon">
                      <i class="fas fa-angle-down" aria-hidden="true" />
                    </span>
                  </a>
                </header>
                <div class="card-content">
                  <div class="content">
                    Yes, everyone can list for free.
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    What does trusted sources mean? Are the listings verified?
                  </p>
                  <a class="card-header-icon" aria-label="more options">
                    <span class="icon">
                      <i class="fas fa-angle-down" aria-hidden="true" />
                    </span>
                  </a>
                </header>
                <div class="card-content">
                  <div class="content">
                    The listings with tag 'verified' have been verified by our
                    team to meet the the given set of metrics which include the
                    correct technical deliverables (source code, access, etc) as
                    per product description and ensuring the code is deployable.{" "}
                    <br />
                    The listings without the verified tag are not tested by our
                    team. We do not take the responsiblity of the technical
                    deliverables.
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end of row */}
          {/* start of row */}
          <div class="is-inline">
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    What payment methods are accepted?
                  </p>
                  <a class="card-header-icon" aria-label="more options">
                    <span class="icon">
                      <i class="fas fa-angle-down" aria-hidden="true" />
                    </span>
                  </a>
                </header>
                <div class="card-content">
                  <div class="content">
                    We let you contact the buyer and you can pay them via agreed
                    payment method. <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    What is the criteria for product approval?
                  </p>
                  <a class="card-header-icon" aria-label="more options">
                    <span class="icon">
                      <i class="fas fa-angle-down" aria-hidden="true" />
                    </span>
                  </a>
                </header>
                <div class="card-content">
                  <div class="content">
                    If your product is not a copied source code, or a reskin it
                    will be approved on Bidzcart.
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">I have more questions</p>
                  <a class="card-header-icon" aria-label="more options">
                    <span class="icon">
                      <i class="fas fa-angle-down" aria-hidden="true" />
                    </span>
                  </a>
                </header>
                <div class="card-content">
                  <div class="content">
                    Please send us a message on live chat.
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end of row */}
        </div>
      </section>

      <section class="signup">
        <p class="title is-3 has-text-centered has-text-white">🌟Signup for early access</p>
        <div class="container bottom-signupform">
          <form
            name="EmailSignup"
            method="POST"
            onSubmit={e => {
              handleEmailSignupSubmit(e)
            }}
          >
            <div class="has-addons">
              <div class="control signup-form-elements">
                <input
                  class="input is-large "
                  type="email"
                  placeholder="Email address"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div class="control signup-form-elements">
                <button
                  class="button is-primary is-fullwidth is-large signup-button "
                  type="submit"
                >
                  Signup for Free
                </button>
              </div>
            </div>
            {hasSubscribed == false ? null : (
                    <p class=" subtitle is-6 subscribing-success">
                      👍Thank you for signing up, <bold>{inputemail}</bold>. We
                      will email you once the platform is live.
                    </p>
                  )}
          </form>
        </div>
      </section>
      <div />
    </Layout>
  )
}

export default IndexPage
