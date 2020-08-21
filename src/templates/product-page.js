import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  idc,
  obj,
  charts,
  performance,
  analysis,
  points,
  conditions,
  payment,
}) => {
  return (
    <div className="content">
      {/* トップ画像 */}
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
        }}
      >
        <h2
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
            backgroundColor: '#f40',
            color: 'white',
            padding: '1rem',
          }}
        >
          {title}
        </h2>
      </div>
      {/* メインコンテンツ */}
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-four-fifths is-offset-1">
                <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
                <p>{description}</p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-four-fifths is-offset-1">
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {idc.heading}
                    </h3>
                    <p>{idc.description}</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-7">
                    <h4 className="has-text-weight-semibold is-size-4">
                      {idc.sma.title}
                    </h4>
                    <ul>
                      <li>{idc.sma.param1}</li>
                      <li>{idc.sma.param2}</li>
                      <li>{idc.sma.param3}</li>
                    </ul>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-7">
                    <h4 className="has-text-weight-semibold is-size-4">
                      {idc.ema.title}
                    </h4>
                    <ul>
                      <li>{idc.ema.param1}</li>
                      <li>{idc.ema.param2}</li>
                    </ul>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-7">
                    <h4 className="has-text-weight-semibold is-size-4">
                      {idc.bb.title}
                    </h4>
                    <ul>
                      <li>{idc.bb.param}</li>
                    </ul>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {obj.heading}
                    </h3>
                    <p>{obj.description}</p>
                    <ul>
                      <li>{obj.horizontal}</li>
                      <li>{obj.trend}</li>
                      <li>{obj.fib}</li>
                    </ul>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {charts.heading}
                    </h3>
                    <p>{charts.description}</p>
                    <ul>
                      <li>{charts.daily}</li>
                      <li>{charts.fourHour}</li>
                      <li>{charts.oneHour}</li>
                      <li>{charts.fiveMinute}</li>
                    </ul>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {performance.heading}
                    </h3>
                    <p>{performance.description}</p>
                    <ul>
                      <li>{performance.chance}</li>
                      <li>{performance.pips}</li>
                      <li>{performance.winRate}</li>
                    </ul>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {analysis.heading}
                    </h3>
                    <ul>
                      <li>{analysis.point1}</li>
                      <li>{analysis.point2}</li>
                      <li>{analysis.point3}</li>
                      <li>{analysis.point4}</li>
                      <li>{analysis.point5}</li>
                      <li>{analysis.point6}</li>
                    </ul>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {points.heading}
                    </h3>
                    <ul>
                      <li>{points.point1}</li>
                      <li>{points.point2}</li>
                    </ul>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {conditions.heading}
                    </h3>
                    <ul>
                      <li>{conditions.point1}</li>
                      <li>{conditions.point2}</li>
                      <li>{conditions.point3}</li>
                      <li>{conditions.point4}</li>
                      <li>{conditions.point5}</li>
                    </ul>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {payment.heading}
                    </h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-7">
                    <h4 className="has-text-weight-semibold is-size-4">
                      {payment.loss.heading}
                    </h4>
                    <ul>
                      <li>{payment.loss.point1}</li>
                      <li>{payment.loss.point2}</li>
                    </ul>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-7">
                    <h4 className="has-text-weight-semibold is-size-4">
                      {payment.profit.heading}
                    </h4>
                    <ul>
                      <li>{payment.profit.point1}</li>
                      <li>{payment.profit.point2}</li>
                      <li>{payment.profit.point3}</li>
                      <li>{payment.profit.point4}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  idc: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    sma: PropTypes.shape({
      title: PropTypes.string,
      param1: PropTypes.number,
      param2: PropTypes.number,
      param3: PropTypes.number
    }),
    ema: PropTypes.shape({
      title: PropTypes.string,
      param1: PropTypes.number,
      param2: PropTypes.number,
    }),
    bb: PropTypes.shape({
      title: PropTypes.string,
      param: PropTypes.number
    })
  }),
  obj: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    horizontal: PropTypes.string,
    trend: PropTypes.string,
    fib: PropTypes.string,
  }),
  charts: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    daily: PropTypes.string,
    fourHour: PropTypes.string,
    oneHour: PropTypes.string,
    fiveMinute: PropTypes.string
  }),
  performance: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    chance: PropTypes.string,
    pips: PropTypes.string,
    winRate: PropTypes.string
  }),
  analysis: PropTypes.shape({
    heading: PropTypes.string,
    point1: PropTypes.string,
    point2: PropTypes.string,
    point3: PropTypes.string,
    point4: PropTypes.string,
    point5: PropTypes.string,
    point6: PropTypes.string
  }),
  points: PropTypes.shape({
    heading: PropTypes.string,
    point1: PropTypes.string,
    point2: PropTypes.string
  }),
  conditions: PropTypes.shape({
    heading: PropTypes.string,
    point1: PropTypes.string,
    point2: PropTypes.string,
    point3: PropTypes.string,
    point4: PropTypes.string,
    point5: PropTypes.string
  }),
  payment: PropTypes.shape({
    heading: PropTypes.string,
    loss: PropTypes.shape({
      heading: PropTypes.string,
      point1: PropTypes.string,
      point2: PropTypes.string
    }),
    profit: PropTypes.shape({
      heading: PropTypes.string,
      point1: PropTypes.string,
      point2: PropTypes.string,
      point3: PropTypes.string,
      point4: PropTypes.string
    }),
  }),
}



const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        idc={frontmatter.idc}
        obj={frontmatter.obj}
        charts={frontmatter.charts}
        performance={frontmatter.performance}
        analysis={frontmatter.analysis}
        points={frontmatter.points}
        conditions={frontmatter.conditions}
        payment={frontmatter.payment}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        idc {
          heading
          description
          sma {
            title
            param1
            param2
            param3
          }
          ema {
            title
            param1
            param2
          }
          bb {
            title
            param
          }
        }
        obj {
          heading
          description
          horizontal
          trend
          fib
        }
        charts {
          heading
          description
          daily
          fourHour
          oneHour
          fiveMinute
        }
        performance {
          heading
          description
          chance
          pips
          winRate
        }
        analysis {
          heading
          point1
          point2
          point3
          point4
          point5
          point6
        }
        points {
          heading
          point1
          point2
        }
        conditions {
          heading
          point1
          point2
          point3
          point4
          point5
        }
        payment {
          heading
          loss {
            heading
            point1
            point2
          }
          profit {
            heading
            point1
            point2
            point3
            point4
          }
        }
      }
    }
  }
`