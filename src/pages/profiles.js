import React from 'react'
import Layout from '../components/layout'

import LandingHeader from '../components/LandingHeader'
import LandingMain from '../components/LandingMain'
import LandingFooter from '../components/LandingFooter'

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: true,
      timeout: true,
      articleTimeout: true,
      article: props.location.hash ? props.location.hash.substr(1) : 'profiles',
      loading: 'is-loading'
    }
    this.handleSwitchArticle = this.handleSwitchArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this);
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        console.log("props.location.hash:", this.props.location.hash);
        if (this.props.location.hash) this.handleSwitchArticle(this.props.location.hash.substr(1));
    }, 100);
    this.timeoutId = setTimeout(() => {
        console.log("props.location.hash:", this.props.location.hash);
        if (this.props.location.hash) this.handleSwitchArticle(this.props.location.hash.substr(1));
    }, 2000);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleSwitchArticle(article) {


    this.setState({
      articleTimeout: !this.state.articleTimeout,
      timeout: !this.state.timeout,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 10)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 10)




    // this.setState({
    //   articleTimeout: !this.state.articleTimeout
    // })

    // this.setState({
    //   timeout: !this.state.timeout
    // })

    // setTimeout(() => {
    //   this.setState({
    //     isArticleVisible: !this.state.isArticleVisible,
    //     article: ''
    //   })
    // }, 350)

  }

  render() {
    return (
      <Layout location={this.props.location} noPadding={true} >
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper" style={{padding: 0}}>
            <LandingHeader isArticleVisible={this.state.isArticleVisible} onOpenArticle={this.handleSwitchArticle} timeout={this.state.timeout} />
            <LandingMain
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              onOpenArticle={this.handleSwitchArticle}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              setWrapperRef={this.setWrapperRef}
            />
            <LandingFooter timeout={this.state.timeout} />
          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

export default LandingPage
