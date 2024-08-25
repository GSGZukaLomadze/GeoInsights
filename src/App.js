import logo from './logo.svg';
import './App.css';
import React from "react";
import {Button, ConfigProvider } from "antd";
import {Link} from "react-router-dom";

function App() {
  return (
      <html>

      <head><title></title></head>

      <body style={{
          cursor: 'auto',
          margin: '0px',
          boxSizing: 'border-box',
          position: 'relative',
          width: '100%',
          height: '729.6px',
          padding: '0px',
          fontSize: '16px',
          fontFamily: 'aktiv-grotesk, sans-serif',
          backgroundColor: 'rgb(255, 255, 255)'
      }}>
      <div style={{boxSizing: 'border-box', position: 'relative', overflow: 'hidden', display: 'none'}}></div>
      <div style={{boxSizing: 'border-box', position: 'relative', width: '100%', height: '729.6px'}}>
          <div style={{
              position: 'relative',
              height: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom left',
              backgroundColor: '#fff',
              backgroundSize: 'autobox-sizing:border-box',
              boxSizing: 'border-box'
          }}>
              <div style={{
                  boxSizing: 'border-box',
                  width: '100%',
                  position: 'relative',
                  top: '0px',
                  zIndex: 1100,
                  backgroundColor: 'rgba(0, 0, 0, 0)'
              }}>
                  <div style={{
                      height: '88px',
                      paddingLeft: '86px',
                      paddingRight: '86px',
                      borderBottom: '0px none rgb(0, 0, 0)',
                      maxWidth: '1608px',
                      paddingTop: '16px',
                      padding: '16px 86px',
                      boxSizing: 'border-box',
                      width: '100%',
                      margin: '0px auto',
                      WebkitBoxPack: 'justify',
                      justifyContent: 'space-between',
                      WebkitBoxAlign: 'center',
                      alignItems: 'center',
                      display: 'flex'
                  }}>
                      <div style={{
                          boxSizing: 'border-box',
                          display: 'block',
                          textDecoration: 'none solid rgb(0, 0, 0)'
                      }}><a href="/" style={{
                          display: 'flex',
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                          boxSizing: 'border-box',
                          textDecoration: 'none solid rgb(0, 0, 238)'
                      }}><div style={{
                          color: "white",
                          fontSize: 45,
                          fontWeight: 'bold'
                      }}>Geo Insights</div></a></div>
                      <ul style={{
                          display: 'flex',
                          boxSizing: 'border-box',
                          listStyle: 'outside none none',
                          margin: '0px',
                          padding: '0px',
                          position: 'absolute',
                          left: '759.6px',
                          transform: 'matrix(1, 0, 0, 1, -258.244, 0)'
                      }}></ul>
                      <button style={{
                          display: 'none',
                          appearance: 'button',
                          overflow: 'visible',
                          textTransform: 'none',
                          margin: '0px',
                          boxSizing: 'border-box',
                          flexDirection: 'column',
                          justifyContent: 'space-around',
                          height: '24px',
                          border: '0px none rgb(0, 0, 0)',
                          cursor: 'pointer',
                          padding: '0px',
                          zIndex: 10,
                          background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'
                      }}>
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512"
                               height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg" style={{
                              overflow: 'hidden',
                              verticalAlign: 'middle',
                              boxSizing: 'border-box',
                              color: 'rgb(255, 255, 255)'
                          }}>
                              <path
                                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                                  style={{boxSizing: 'border-box'}}></path>
                          </svg>
                      </button>
                      <nav style={{
                          display: 'none',
                          top: '59px',
                          width: '100%',
                          boxSizing: 'border-box',
                          fontFamily: 'aktiv-grotesk, sans-serif',
                          overflowY: 'scroll',
                          transform: 'none',
                          flexDirection: 'column',
                          alignContent: 'flex-start',
                          background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box',
                          height: '766.08px',
                          textAlign: 'left',
                          padding: '0px 16px',
                          position: 'absolute',
                          left: '0px',
                          transition: 'transform 0.3s ease-in-out',
                          zIndex: 800
                      }}><a style={{
                          display: 'flex',
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                          boxSizing: 'border-box',
                          margin: '0px',
                          fontFamily: 'aktiv-grotesk, sans-serif',
                          fontWeight: 500,
                          lineHeight: '22px',
                          letterSpacing: 'normal',
                          borderBottom: '0.8px solid rgb(220, 222, 242)',
                          color: 'rgb(33, 33, 33)',
                          WebkitBoxPack: 'justify',
                          justifyContent: 'space-between',
                          WebkitBoxAlign: 'center',
                          alignItems: 'center',
                          padding: '20px 5px',
                          listStyle: 'outside none none',
                          height: '60px',
                          textDecoration: 'none solid rgb(33, 33, 33)',
                          fontSize: '18px',
                          transition: 'color 0.3s linear',
                          textAlign: 'center'
                      }}>
                          <div style={{boxSizing: 'border-box'}}>
                              <div style={{boxSizing: 'border-box', color: 'rgb(33, 33, 33)'}}>Solutions</div>
                          </div>
                          <div style={{boxSizing: 'border-box'}}>
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512"
                                   height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{
                                  overflow: 'hidden',
                                  verticalAlign: 'middle',
                                  boxSizing: 'border-box',
                                  color: 'rgb(33, 33, 33)'
                              }}>
                                  <path
                                      d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                                      style={{boxSizing: 'border-box'}}></path>
                              </svg>
                          </div>
                      </a><a style={{
                          display: 'flex',
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                          boxSizing: 'border-box',
                          margin: '0px',
                          fontFamily: 'aktiv-grotesk, sans-serif',
                          fontWeight: 500,
                          lineHeight: '22px',
                          letterSpacing: 'normal',
                          borderBottom: '0.8px solid rgb(220, 222, 242)',
                          color: 'rgb(33, 33, 33)',
                          WebkitBoxPack: 'justify',
                          justifyContent: 'space-between',
                          WebkitBoxAlign: 'center',
                          alignItems: 'center',
                          padding: '20px 5px',
                          listStyle: 'outside none none',
                          height: '60px',
                          textDecoration: 'none solid rgb(33, 33, 33)',
                          fontSize: '18px',
                          transition: 'color 0.3s linear',
                          textAlign: 'center'
                      }}>
                          <div style={{boxSizing: 'border-box'}}>
                              <div style={{boxSizing: 'border-box', color: 'rgb(33, 33, 33)'}}>Industries</div>
                          </div>
                          <div style={{boxSizing: 'border-box'}}>
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512"
                                   height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{
                                  overflow: 'hidden',
                                  verticalAlign: 'middle',
                                  boxSizing: 'border-box',
                                  color: 'rgb(33, 33, 33)'
                              }}>
                                  <path
                                      d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                                      style={{boxSizing: 'border-box'}}></path>
                              </svg>
                          </div>
                      </a><a href="/pricing" style={{
                          display: 'flex',
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                          boxSizing: 'border-box',
                          margin: '0px',
                          fontFamily: 'aktiv-grotesk, sans-serif',
                          fontWeight: 500,
                          lineHeight: '22px',
                          letterSpacing: 'normal',
                          borderBottom: '0.8px solid rgb(220, 222, 242)',
                          WebkitBoxPack: 'justify',
                          justifyContent: 'space-between',
                          WebkitBoxAlign: 'center',
                          alignItems: 'center',
                          padding: '20px 5px',
                          listStyle: 'outside none none',
                          height: '60px',
                          textDecoration: 'none solid rgb(33, 33, 33)',
                          fontSize: '18px',
                          color: 'rgb(33, 33, 33)',
                          transition: 'color 0.3s linear',
                          textAlign: 'center'
                      }}>Pricing</a><a style={{
                          display: 'flex',
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                          boxSizing: 'border-box',
                          margin: '0px',
                          fontFamily: 'aktiv-grotesk, sans-serif',
                          fontWeight: 500,
                          lineHeight: '22px',
                          letterSpacing: 'normal',
                          borderBottom: '0.8px solid rgb(220, 222, 242)',
                          color: 'rgb(33, 33, 33)',
                          WebkitBoxPack: 'justify',
                          justifyContent: 'space-between',
                          WebkitBoxAlign: 'center',
                          alignItems: 'center',
                          padding: '20px 5px',
                          listStyle: 'outside none none',
                          height: '60px',
                          textDecoration: 'none solid rgb(33, 33, 33)',
                          fontSize: '18px',
                          transition: 'color 0.3s linear',
                          textAlign: 'center'
                      }}>
                          <div style={{boxSizing: 'border-box'}}>
                              <div style={{boxSizing: 'border-box', color: 'rgb(33, 33, 33)'}}>Resources</div>
                          </div>
                          <div style={{boxSizing: 'border-box'}}>
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512"
                                   height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{
                                  overflow: 'hidden',
                                  verticalAlign: 'middle',
                                  boxSizing: 'border-box',
                                  color: 'rgb(33, 33, 33)'
                              }}>
                                  <path
                                      d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                                      style={{boxSizing: 'border-box'}}></path>
                              </svg>
                          </div>
                      </a><a style={{
                          display: 'flex',
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                          boxSizing: 'border-box',
                          margin: '0px',
                          fontFamily: 'aktiv-grotesk, sans-serif',
                          fontWeight: 500,
                          lineHeight: '22px',
                          letterSpacing: 'normal',
                          borderBottom: '0.8px solid rgb(220, 222, 242)',
                          color: 'rgb(33, 33, 33)',
                          WebkitBoxPack: 'justify',
                          justifyContent: 'space-between',
                          WebkitBoxAlign: 'center',
                          alignItems: 'center',
                          padding: '20px 5px',
                          listStyle: 'outside none none',
                          height: '60px',
                          textDecoration: 'none solid rgb(33, 33, 33)',
                          fontSize: '18px',
                          transition: 'color 0.3s linear',
                          textAlign: 'center'
                      }}>
                          <div style={{boxSizing: 'border-box'}}>
                              <div style={{boxSizing: 'border-box', color: 'rgb(33, 33, 33)'}}>Company</div>
                          </div>
                          <div style={{boxSizing: 'border-box'}}>
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512"
                                   height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{
                                  overflow: 'hidden',
                                  verticalAlign: 'middle',
                                  boxSizing: 'border-box',
                                  color: 'rgb(33, 33, 33)'
                              }}>
                                  <path
                                      d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                                      style={{boxSizing: 'border-box'}}></path>
                              </svg>
                          </div>
                      </a><a style={{
                          display: 'flex',
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                          boxSizing: 'border-box',
                          margin: '0px',
                          fontFamily: 'aktiv-grotesk, sans-serif',
                          fontWeight: 500,
                          lineHeight: '22px',
                          letterSpacing: 'normal',
                          borderBottom: '0.8px solid rgb(220, 222, 242)',
                          color: 'rgb(33, 33, 33)',
                          WebkitBoxPack: 'justify',
                          justifyContent: 'space-between',
                          WebkitBoxAlign: 'center',
                          alignItems: 'center',
                          padding: '20px 5px',
                          listStyle: 'outside none none',
                          height: '60px',
                          textDecoration: 'none solid rgb(33, 33, 33)',
                          fontSize: '18px',
                          transition: 'color 0.3s linear',
                          textAlign: 'center'
                      }}>
                          <div style={{boxSizing: 'border-box'}}>
                              <div style={{boxSizing: 'border-box', color: 'rgb(33, 33, 33)'}}>Contact Us</div>
                          </div>
                          <div style={{boxSizing: 'border-box'}}>
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512"
                                   height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{
                                  overflow: 'hidden',
                                  verticalAlign: 'middle',
                                  boxSizing: 'border-box',
                                  color: 'rgb(33, 33, 33)'
                              }}>
                                  <path
                                      d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                                      style={{boxSizing: 'border-box'}}></path>
                              </svg>
                          </div>
                      </a>
                          <div style={{padding: '20px', boxSizing: 'border-box'}}></div>
                          <a tabIndex="0" href="https://app.airdna.co/data/login" style={{
                              display: 'flex',
                              backgroundColor: 'rgba(0, 0, 0, 0)',
                              boxSizing: 'border-box',
                              WebkitBoxAlign: 'center',
                              alignItems: 'center',
                              WebkitBoxPack: 'center',
                              justifyContent: 'center',
                              position: 'relative',
                              WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                              outline: 'rgb(31, 32, 32) none 0px',
                              margin: '0px',
                              cursor: 'pointer',
                              userSelect: 'none',
                              verticalAlign: 'middle',
                              appearance: 'none',
                              textDecoration: 'none solid rgb(31, 32, 32)',
                              fontFamily: 'aktiv-grotesk, sans-serif',
                              minWidth: '64px',
                              transition: 'color 0.3s linear',
                              border: '0.8px solid rgba(31, 32, 32, 0.5)',
                              color: 'rgb(31, 32, 32)',
                              fontWeight: 500,
                              fontSize: '18px',
                              textTransform: 'none',
                              lineHeight: '22px',
                              letterSpacing: '0.4px',
                              boxShadow: 'none',
                              padding: '10px 20px',
                              borderRadius: '32px',
                              textAlign: 'center'
                          }}>Log in<span style={{
                              boxSizing: 'border-box',
                              overflow: 'hidden',
                              pointerEvents: 'none',
                              position: 'absolute',
                              zIndex: 0,
                              inset: '0px',
                              borderRadius: '32px'
                          }}></span></a>
                          <div style={{padding: '20px', boxSizing: 'border-box'}}></div>
                          <a tabIndex="0" href="https://app.airdna.co/data/us?welcome=true" style={{
                              display: 'flex',
                              backgroundColor: 'rgb(31, 32, 32)',
                              boxSizing: 'border-box',
                              WebkitBoxAlign: 'center',
                              alignItems: 'center',
                              WebkitBoxPack: 'center',
                              justifyContent: 'center',
                              position: 'relative',
                              WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                              outline: 'rgb(255, 255, 255) none 0px',
                              border: '0px none rgb(255, 255, 255)',
                              margin: '0px',
                              cursor: 'pointer',
                              userSelect: 'none',
                              verticalAlign: 'middle',
                              appearance: 'none',
                              textDecoration: 'none solid rgb(255, 255, 255)',
                              fontFamily: 'aktiv-grotesk, sans-serif',
                              minWidth: '64px',
                              transition: 'color 0.3s linear',
                              fontWeight: 500,
                              fontSize: '18px',
                              textTransform: 'none',
                              lineHeight: '22px',
                              letterSpacing: '0.4px',
                              boxShadow: 'none',
                              padding: '10px 20px',
                              borderRadius: '32px',
                              color: 'rgb(255, 255, 255)',
                              textAlign: 'center'
                          }}>Start for free<span style={{
                              boxSizing: 'border-box',
                              overflow: 'hidden',
                              pointerEvents: 'none',
                              position: 'absolute',
                              zIndex: 0,
                              inset: '0px',
                              borderRadius: '32px'
                          }}></span></a>
                      </nav>
                      <div style={{
                          display: 'flex',
                          boxSizing: 'border-box',
                          WebkitBoxAlign: 'center',
                          alignItems: 'center',
                          WebkitBoxPack: 'center',
                          justifyContent: 'center',
                          gap: '16px'
                      }}><a tabIndex="0" href="https://app.airdna.co/data/us?welcome=true" style={{
                          display: 'block',
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                          boxSizing: 'border-box',
                          WebkitBoxAlign: 'center',
                          alignItems: 'center',
                          WebkitBoxPack: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                          outline: 'rgb(255, 255, 255) none 0px',
                          margin: '0px',
                          cursor: 'pointer',
                          userSelect: 'none',
                          verticalAlign: 'middle',
                          appearance: 'none',
                          textDecoration: 'none solid rgb(255, 255, 255)',
                          fontFamily: 'aktiv-grotesk, sans-serif',
                          minWidth: '64px',
                          transition: 'background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), color 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                          fontWeight: 500,
                          fontSize: '16px',
                          textTransform: 'none',
                          lineHeight: '22px',
                          letterSpacing: '0.4px',
                          boxShadow: 'none',
                          padding: '10px 20px',
                          borderRadius: '32px',
                          color: 'rgb(255, 255, 255)',
                          border: '0.8px solid rgb(255, 255, 255)'
                      }}>Start for free<span style={{
                          boxSizing: 'border-box',
                          overflow: 'hidden',
                          pointerEvents: 'none',
                          position: 'absolute',
                          zIndex: 0,
                          inset: '0px',
                          borderRadius: '32px'
                      }}></span></a><a tabIndex="0" href="https://app.airdna.co/data/login" style={{
                          display: 'block',
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                          boxSizing: 'border-box',
                          WebkitBoxAlign: 'center',
                          alignItems: 'center',
                          WebkitBoxPack: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                          outline: 'rgb(255, 255, 255) none 0px',
                          border: '0px none rgb(255, 255, 255)',
                          margin: '0px',
                          cursor: 'pointer',
                          userSelect: 'none',
                          verticalAlign: 'middle',
                          appearance: 'none',
                          textDecoration: 'none solid rgb(255, 255, 255)',
                          fontFamily: 'aktiv-grotesk, sans-serif',
                          minWidth: '64px',
                          transition: 'background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), color 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                          fontWeight: 500,
                          textTransform: 'none',
                          lineHeight: '22px',
                          letterSpacing: '0.4px',
                          boxShadow: 'none',
                          borderRadius: '32px',
                          padding: '6px 8px',
                          fontSize: '16px',
                          color: 'rgb(255, 255, 255)',
                          background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'
                      }}>Log in<span style={{
                          boxSizing: 'border-box',
                          overflow: 'hidden',
                          pointerEvents: 'none',
                          position: 'absolute',
                          zIndex: 0,
                          inset: '0px',
                          borderRadius: '32px'
                      }}></span></a></div>
                  </div>
              </div>
              <main style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  margin: '0 auto',
                  paddingBottom: '0px',
                  paddingRight: '1rem',
                  paddingLeft: '1remdisplay:block',
                  boxSizing: 'border-box',
                  display: 'block'
              }}>
                  <section style={{
                      height: '761.6px',
                      boxSizing: 'border-box',
                      background: 'linear-gradient(0deg, rgba(73, 73, 73, 0.3) 0%, rgba(73, 73, 73, 0.3) 100%) center center / cover no-repeat, url("https://images.prismic.io/airdna-next/5ad123cf-0cc3-484d-826a-f811631b96f8_BG2-Updated+1.png?auto=compress,format"), lightgray',
                      margin: '-104px -16px -32px'
                  }}>
                      <div style={{
                          paddingTop: '152px',
                          gap: '24px',
                          maxHeight: '761.6px',
                          boxSizing: 'border-box',
                          display: 'flex',
                          flexDirection: 'column',
                          WebkitBoxAlign: 'center',
                          alignItems: 'center',
                          marginLeft: 'auto',
                          marginRight: 'auto'
                      }}>
                          <div style={{
                              paddingLeft: '0px',
                              paddingRight: '0px',
                              boxSizing: 'border-box',
                              display: 'flex'
                          }}>
                              <p style={{
                                  paddingTop: '16px',
                                  paddingBottom: '16px',
                                  boxSizing: 'border-box',
                                  margin: '0px',
                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                  fontWeight: 400,
                                  fontSize: '16px',
                                  lineHeight: '24px',
                                  letterSpacing: '0.15px'
                              }}>
                                  <h1 style={{
                                      fontSize: '48px',
                                      lineHeight: '55px',
                                      letterSpacing: '1.2px',
                                      margin: '0px',
                                      boxSizing: 'border-box',
                                      color: 'rgb(255, 255, 255)',
                                      textAlign: 'center',
                                      fontFamily: 'tablet-gothic-condensed, sans-serif',
                                      fontFeatureSettings: '"clig" 0, "liga" 0',
                                      textShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 80px',
                                      fontStyle: 'normal',
                                      fontWeight: 700
                                  }}>Grow faster with better<br style={{boxSizing: 'border-box'}}/>short-term data</h1>
                              </p>
                          </div>
                          <div style={{
                              width: '260px',
                              height: '100px',
                              boxSizing: 'border-box',
                              display: 'flex',
                              borderRadius: '16px',
                              WebkitBoxPack: 'center',
                              justifyContent: 'center',
                              alignItems: 'center'
                          }}>
                              <ConfigProvider
                                  theme={{
                                      components: {
                                          Button: {
                                              colorPrimary: 'rgb(31, 32, 32)',
                                              algorithm: true, // Enable algorithm
                                          },
                                      },
                                  }}
                              >
                                  <Link to="/dashboard">
                                      <Button type={"primary"} size={'large'} style={{
                                          width: 210
                                      }}>
                                          Go To Dashboard
                                      </Button>
                                  </Link>
                              </ConfigProvider>
                          </div>
                      </div>
                  </section>
                  <section style={{
                      padding: '56px 86px',
                      paddingLeft: '86px',
                      paddingRight: '86px',
                      boxSizing: 'border-box'
                  }}>
                      <div style={{
                          paddingLeft: '27.5px',
                          paddingRight: '27.5px',
                          boxSizing: 'border-box',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          maxWidth: '1140px'
                      }}>
                          <div style={{
                              gap: '24px',
                              marginBottom: '16px',
                              boxSizing: 'border-box',
                              display: 'flex',
                              flexDirection: 'column',
                              maxWidth: '680px',
                              marginLeft: 'auto',
                              marginRight: 'auto',
                              textAlign: 'center',
                              fontWeight: 600,
                              marginTop: '8px'
                          }}>
                              <div type="light" style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}></div>
                          </div>
                          <div style={{display: 'block', boxSizing: 'border-box'}}>
                              <div style={{
                                  gap: '80px',
                                  gridTemplateColumns: '308.325px 308.337px 308.325px',
                                  paddingTop: '32px',
                                  paddingBottom: '32px',
                                  boxSizing: 'border-box',
                                  display: 'grid',
                                  marginTop: '0px'
                              }}>
                                  <div style={{boxSizing: 'border-box', textAlign: 'center', width: '100%'}}>
                                      <div style={{boxSizing: 'border-box'}}><img
                                          src="https://airdna-next.cdn.prismic.io/airdna-next/ZieioPPdc1huKsyL_market-research.svg?rect=18%2C0%2C255%2C231&amp;w=249&amp;h=226?auto=compress,format"
                                          style={{
                                              maxHeight: '224px',
                                              borderStyle: 'none',
                                              verticalAlign: 'middle',
                                              boxSizing: 'border-box',
                                              height: '224px',
                                              margin: 'auto',
                                              objectFit: 'contain'
                                          }}/>
                                          <div type="light" style={{
                                              paddingTop: '18px',
                                              paddingBottom: '16px',
                                              boxSizing: 'border-box',
                                              margin: '0px'
                                          }}>
                                              <h4 style={{
                                                  fontSize: '20px',
                                                  lineHeight: '22px',
                                                  boxSizing: 'border-box',
                                                  fontWeight: 500,
                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                  color: 'rgb(33, 33, 33)',
                                                  margin: '0px',
                                                  padding: '0px'
                                              }}>Competitive market research&nbsp;</h4>
                                          </div>
                                          <div type="light"
                                               listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                               style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                              <p style={{
                                                  fontSize: '16px',
                                                  letterSpacing: '0.15px',
                                                  lineHeight: '24px',
                                                  boxSizing: 'border-box',
                                                  color: 'rgb(33, 33, 33)',
                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                  margin: '0px',
                                                  padding: '0px',
                                                  fontWeight: 400
                                              }}>Analyze performance and get actionable, in-depth data insights on any
                                                  market.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div style={{boxSizing: 'border-box', textAlign: 'center', width: '100%'}}>
                                      <div style={{boxSizing: 'border-box'}}><img
                                          src="https://airdna-next.cdn.prismic.io/airdna-next/ZjMbw0MTzAJOCe0n_SVG.svg?rect=15%2C0%2C252%2C229&amp;w=249&amp;h=226?auto=compress,format"
                                          style={{
                                              maxHeight: '224px',
                                              borderStyle: 'none',
                                              verticalAlign: 'middle',
                                              boxSizing: 'border-box',
                                              height: '224px',
                                              margin: 'auto',
                                              objectFit: 'contain'
                                          }}/>
                                          <div type="light" style={{
                                              paddingTop: '18px',
                                              paddingBottom: '16px',
                                              boxSizing: 'border-box',
                                              margin: '0px'
                                          }}>
                                              <h4 style={{
                                                  fontSize: '20px',
                                                  lineHeight: '22px',
                                                  boxSizing: 'border-box',
                                                  fontWeight: 500,
                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                  color: 'rgb(33, 33, 33)',
                                                  margin: '0px',
                                                  padding: '0px'
                                              }}>Actionable market projections</h4>
                                          </div>
                                          <div type="light"
                                               listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                               style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                              <p style={{
                                                  fontSize: '16px',
                                                  letterSpacing: '0.15px',
                                                  lineHeight: '24px',
                                                  boxSizing: 'border-box',
                                                  color: 'rgb(33, 33, 33)',
                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                  margin: '0px',
                                                  padding: '0px',
                                                  fontWeight: 400
                                              }}>Calculate any property's earning potential to make an informed
                                                  investment.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div style={{boxSizing: 'border-box', textAlign: 'center', width: '100%'}}>
                                      <div style={{boxSizing: 'border-box'}}><img
                                          src="https://airdna-next.cdn.prismic.io/airdna-next/ZiY6FfPdc1huKq9S_invesstment-property.svg?rect=12%2C0%2C251%2C228&amp;w=249&amp;h=226?auto=compress,format"
                                          style={{
                                              maxHeight: '224px',
                                              borderStyle: 'none',
                                              verticalAlign: 'middle',
                                              boxSizing: 'border-box',
                                              height: '224px',
                                              margin: 'auto',
                                              objectFit: 'contain'
                                          }}/>
                                          <div type="light" style={{
                                              paddingTop: '18px',
                                              paddingBottom: '16px',
                                              boxSizing: 'border-box',
                                              margin: '0px'
                                          }}>
                                              <h4 style={{
                                                  fontSize: '20px',
                                                  lineHeight: '22px',
                                                  boxSizing: 'border-box',
                                                  fontWeight: 500,
                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                  color: 'rgb(33, 33, 33)',
                                                  margin: '0px',
                                                  padding: '0px'
                                              }}>Investment property insights&nbsp;</h4>
                                          </div>
                                          <div type="light"
                                               listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                               style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                              <p style={{
                                                  fontSize: '16px',
                                                  letterSpacing: '0.15px',
                                                  lineHeight: '24px',
                                                  boxSizing: 'border-box',
                                                  color: 'rgb(33, 33, 33)',
                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                  margin: '0px',
                                                  padding: '0px',
                                                  fontWeight: 400
                                              }}>Explore and analyze For Sale properties to find the best new
                                                  opportunities.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div style={{display: 'none', boxSizing: 'border-box', width: '100%'}}>
                              <div dir="ltr" style={{
                                  position: 'relative',
                                  display: 'block',
                                  boxSizing: 'border-box',
                                  userSelect: 'none',
                                  touchAction: 'pan-y',
                                  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
                              }}>
                                  <div style={{
                                      transform: 'none',
                                      overflow: 'hidden',
                                      margin: '0px',
                                      padding: '0px',
                                      position: 'relative',
                                      display: 'block',
                                      boxSizing: 'border-box'
                                  }}>
                                      <div style={{
                                          opacity: 1,
                                          transform: 'none',
                                          position: 'relative',
                                          top: '0px',
                                          left: '0px',
                                          display: 'block',
                                          marginLeft: 'auto',
                                          marginRight: 'auto',
                                          boxSizing: 'border-box'
                                      }}>
                                          <div data-index="0" tabIndex="-1" aria-hidden="false" style={{
                                              outline: 'none',
                                              width: '0px',
                                              display: 'block',
                                              float: 'left',
                                              height: '100%',
                                              minHeight: '1px',
                                              boxSizing: 'border-box'
                                          }}>
                                              <div style={{boxSizing: 'border-box'}}>
                                                  <div tabIndex="-1" style={{
                                                      width: '100%',
                                                      display: 'inline-blockbox-sizing:border-box',
                                                      textAlign: 'center',
                                                      paddingRight: '16px',
                                                      boxSizing: 'border-box'
                                                  }}>
                                                      <div style={{boxSizing: 'border-box'}}><img
                                                          src="https://airdna-next.cdn.prismic.io/airdna-next/ZieioPPdc1huKsyL_market-research.svg?rect=18%2C0%2C255%2C231&amp;w=249&amp;h=226?auto=compress,format"
                                                          style={{
                                                              maxHeight: '224px',
                                                              display: 'block',
                                                              borderStyle: 'none',
                                                              verticalAlign: 'middle',
                                                              boxSizing: 'border-box',
                                                              height: '100%',
                                                              margin: 'auto',
                                                              objectFit: 'contain',
                                                              width: '150px'
                                                          }}/>
                                                          <div type="light" style={{
                                                              paddingTop: '18px',
                                                              paddingBottom: '16px',
                                                              boxSizing: 'border-box',
                                                              margin: '0px'
                                                          }}>
                                                              <h4 style={{
                                                                  fontSize: '20px',
                                                                  lineHeight: '22px',
                                                                  boxSizing: 'border-box',
                                                                  fontWeight: 500,
                                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                                  color: 'rgb(33, 33, 33)',
                                                                  margin: '0px',
                                                                  padding: '0px'
                                                              }}>Competitive market research&nbsp;</h4>
                                                          </div>
                                                          <div type="light"
                                                               listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                                               style={{
                                                                   boxSizing: 'border-box',
                                                                   margin: '0px',
                                                                   padding: '0px'
                                                               }}>
                                                              <p style={{
                                                                  fontSize: '16px',
                                                                  letterSpacing: '0.15px',
                                                                  lineHeight: '24px',
                                                                  boxSizing: 'border-box',
                                                                  color: 'rgb(33, 33, 33)',
                                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                                  margin: '0px',
                                                                  padding: '0px',
                                                                  fontWeight: 400
                                                              }}>Analyze performance and get actionable, in-depth data
                                                                  insights on any market.</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div data-index="1" tabIndex="-1" aria-hidden="false" style={{
                                              outline: 'none',
                                              width: '0px',
                                              display: 'block',
                                              float: 'left',
                                              height: '100%',
                                              minHeight: '1px',
                                              boxSizing: 'border-box'
                                          }}>
                                              <div style={{boxSizing: 'border-box'}}>
                                                  <div tabIndex="-1" style={{
                                                      width: '100%',
                                                      display: 'inline-blockbox-sizing:border-box',
                                                      textAlign: 'center',
                                                      paddingRight: '16px',
                                                      boxSizing: 'border-box'
                                                  }}>
                                                      <div style={{boxSizing: 'border-box'}}><img
                                                          src="https://airdna-next.cdn.prismic.io/airdna-next/ZjMbw0MTzAJOCe0n_SVG.svg?rect=15%2C0%2C252%2C229&amp;w=249&amp;h=226?auto=compress,format"
                                                          style={{
                                                              maxHeight: '224px',
                                                              display: 'block',
                                                              borderStyle: 'none',
                                                              verticalAlign: 'middle',
                                                              boxSizing: 'border-box',
                                                              height: '100%',
                                                              margin: 'auto',
                                                              objectFit: 'contain',
                                                              width: '150px'
                                                          }}/>
                                                          <div type="light" style={{
                                                              paddingTop: '18px',
                                                              paddingBottom: '16px',
                                                              boxSizing: 'border-box',
                                                              margin: '0px'
                                                          }}>
                                                              <h4 style={{
                                                                  fontSize: '20px',
                                                                  lineHeight: '22px',
                                                                  boxSizing: 'border-box',
                                                                  fontWeight: 500,
                                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                                  color: 'rgb(33, 33, 33)',
                                                                  margin: '0px',
                                                                  padding: '0px'
                                                              }}>Actionable market projections</h4>
                                                          </div>
                                                          <div type="light"
                                                               listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                                               style={{
                                                                   boxSizing: 'border-box',
                                                                   margin: '0px',
                                                                   padding: '0px'
                                                               }}>
                                                              <p style={{
                                                                  fontSize: '16px',
                                                                  letterSpacing: '0.15px',
                                                                  lineHeight: '24px',
                                                                  boxSizing: 'border-box',
                                                                  color: 'rgb(33, 33, 33)',
                                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                                  margin: '0px',
                                                                  padding: '0px',
                                                                  fontWeight: 400
                                                              }}>Calculate any property's earning potential to make an
                                                                  informed investment.</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div data-index="2" tabIndex="-1" aria-hidden="true" style={{
                                              outline: 'none',
                                              width: '0px',
                                              display: 'block',
                                              float: 'left',
                                              height: '100%',
                                              minHeight: '1px',
                                              boxSizing: 'border-box'
                                          }}>
                                              <div style={{boxSizing: 'border-box'}}>
                                                  <div tabIndex="-1" style={{
                                                      width: '100%',
                                                      display: 'inline-blockbox-sizing:border-box',
                                                      textAlign: 'center',
                                                      paddingRight: '16px',
                                                      boxSizing: 'border-box'
                                                  }}>
                                                      <div style={{boxSizing: 'border-box'}}><img
                                                          src="https://airdna-next.cdn.prismic.io/airdna-next/ZiY6FfPdc1huKq9S_invesstment-property.svg?rect=12%2C0%2C251%2C228&amp;w=249&amp;h=226?auto=compress,format"
                                                          style={{
                                                              maxHeight: '224px',
                                                              display: 'block',
                                                              borderStyle: 'none',
                                                              verticalAlign: 'middle',
                                                              boxSizing: 'border-box',
                                                              height: '100%',
                                                              margin: 'auto',
                                                              objectFit: 'contain',
                                                              width: '150px'
                                                          }}/>
                                                          <div type="light" style={{
                                                              paddingTop: '18px',
                                                              paddingBottom: '16px',
                                                              boxSizing: 'border-box',
                                                              margin: '0px'
                                                          }}>
                                                              <h4 style={{
                                                                  fontSize: '20px',
                                                                  lineHeight: '22px',
                                                                  boxSizing: 'border-box',
                                                                  fontWeight: 500,
                                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                                  color: 'rgb(33, 33, 33)',
                                                                  margin: '0px',
                                                                  padding: '0px'
                                                              }}>Investment property insights&nbsp;</h4>
                                                          </div>
                                                          <div type="light"
                                                               listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                                               style={{
                                                                   boxSizing: 'border-box',
                                                                   margin: '0px',
                                                                   padding: '0px'
                                                               }}>
                                                              <p style={{
                                                                  fontSize: '16px',
                                                                  letterSpacing: '0.15px',
                                                                  lineHeight: '24px',
                                                                  boxSizing: 'border-box',
                                                                  color: 'rgb(33, 33, 33)',
                                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                                  margin: '0px',
                                                                  padding: '0px',
                                                                  fontWeight: 400
                                                              }}>Explore and analyze For Sale properties to find the
                                                                  best new opportunities.</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div style={{
                              paddingTop: '32px',
                              paddingBottom: '32px',
                              boxSizing: 'border-box',
                              textAlign: 'center'
                          }}><a tabIndex="0" href="https://app.airdna.co/data/register" style={{
                              maxWidth: '484px',
                              width: '100%',
                              padding: '14px 20px',
                              backgroundColor: 'rgb(31, 32, 32)',
                              boxSizing: 'border-box',
                              display: 'inline-flex',
                              WebkitBoxAlign: 'center',
                              alignItems: 'center',
                              WebkitBoxPack: 'center',
                              justifyContent: 'center',
                              position: 'relative',
                              WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                              outline: 'rgb(255, 255, 255) none 0px',
                              border: '0px none rgb(255, 255, 255)',
                              margin: '0px',
                              cursor: 'pointer',
                              userSelect: 'none',
                              verticalAlign: 'middle',
                              appearance: 'none',
                              textDecoration: 'none solid rgb(255, 255, 255)',
                              fontFamily: 'aktiv-grotesk, sans-serif',
                              minWidth: '64px',
                              transition: 'background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), color 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                              fontWeight: 500,
                              fontSize: '16px',
                              textTransform: 'none',
                              letterSpacing: '0.4px',
                              boxShadow: 'none',
                              borderRadius: '32px',
                              color: 'rgb(255, 255, 255)',
                              lineHeight: '16px',
                              flexDirection: 'row-reverse',
                              gap: '6px'
                          }}>
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                   xmlns="http://www.w3.org/2000/svg" style={{
                                  display: 'block',
                                  overflow: 'hidden',
                                  verticalAlign: 'middle',
                                  boxSizing: 'border-box'
                              }}>
                                  <path
                                      d="M8.5876 5.57666L7.4126 6.75166L11.2293 10.5767L7.4126 14.4017L8.5876 15.5767L13.5876 10.5767L8.5876 5.57666Z"
                                      fill="white" style={{boxSizing: 'border-box'}}></path>
                              </svg>
                              Start for free<span style={{
                              boxSizing: 'border-box',
                              overflow: 'hidden',
                              pointerEvents: 'none',
                              position: 'absolute',
                              zIndex: 0,
                              inset: '0px',
                              borderRadius: '32px'
                          }}></span></a></div>
                      </div>
                  </section>
                  <section style={{paddingTop: '64px', paddingBottom: '64px', boxSizing: 'border-box'}}>
                      <div style={{
                          boxSizing: 'border-box',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          maxWidth: '1140px'
                      }}>
                          <div type="light" style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                              <h1 style={{
                                  marginBottom: '32px',
                                  fontSize: '42px',
                                  boxSizing: 'border-box',
                                  textAlign: 'center',
                                  fontWeight: 600,
                                  lineHeight: '48px',
                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                  color: 'rgb(33, 33, 33)',
                                  padding: '0px'
                              }}>Invest with confidence</h1>
                          </div>
                          <div style={{
                              flexDirection: 'column',
                              alignItems: 'flex-start',
                              gap: '0px',
                              boxSizing: 'border-box',
                              display: 'flex',
                              WebkitBoxPack: 'start',
                              justifyContent: 'flex-start'
                          }}>
                              <div style={{
                                  gap: '64px',
                                  paddingTop: '32px',
                                  paddingBottom: '16px',
                                  gridTemplateColumns: '538px 538px',
                                  textAlign: 'left',
                                  justifyItems: 'center',
                                  boxSizing: 'border-box',
                                  width: '100%',
                                  display: 'grid',
                                  WebkitBoxAlign: 'center',
                                  alignItems: 'center'
                              }}><img
                                  src="https://images.prismic.io/airdna-next/ZjMpyEMTzAJOCe2Z_V1png-1-.png?auto=format,compress"
                                  alt="Better investment" style={{
                                  order: 0,
                                  maxWidth: '460px',
                                  borderStyle: 'none',
                                  verticalAlign: 'middle',
                                  boxSizing: 'border-box',
                                  width: '100%'
                              }}/>
                                  <div style={{boxSizing: 'border-box', maxWidth: '495px', width: '100%'}}>
                                      <div type="light"
                                           style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                          <h3 style={{
                                              fontSize: '32px',
                                              marginBottom: '16px',
                                              boxSizing: 'border-box',
                                              lineHeight: '38.4px',
                                              fontWeight: 600,
                                              fontFamily: 'aktiv-grotesk, sans-serif',
                                              color: 'rgb(33, 33, 33)',
                                              margin: '0px 0px 16px',
                                              padding: '0px'
                                          }}>Better investment decisions with trusted information</h3>
                                      </div>
                                      <div type="light"
                                           listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                           style={{
                                               marginBottom: '16px',
                                               boxSizing: 'border-box',
                                               padding: '0px',
                                               fontSize: '16px',
                                               lineHeight: '24px',
                                               letterSpacing: '0.15px'
                                           }}>
                                          <p style={{
                                              fontSize: '16px',
                                              letterSpacing: '0.15px',
                                              lineHeight: '24px',
                                              boxSizing: 'border-box',
                                              color: 'rgb(33, 33, 33)',
                                              fontFamily: 'aktiv-grotesk, sans-serif',
                                              margin: '0px',
                                              padding: '0px',
                                              fontWeight: 400
                                          }}>Reach your short-term rental investment goals with GeoInsights' research and
                                              revenue optimization tools to guide you. Our intuitive platform empowers
                                              you to take charge, make informed decisions, and unlock the hidden
                                              potential of your property portfolio.</p>
                                      </div>
                                      <div style={{boxSizing: 'border-box'}}><a tabIndex="0"
                                                                                href="https://app.airdna.co/data/register"
                                                                                style={{
                                                                                    maxWidth: '484px',
                                                                                    width: '100%',
                                                                                    padding: '14px 20px',
                                                                                    backgroundColor: 'rgba(0, 0, 0, 0)',
                                                                                    boxSizing: 'border-box',
                                                                                    display: 'inline-flex',
                                                                                    WebkitBoxAlign: 'center',
                                                                                    alignItems: 'center',
                                                                                    position: 'relative',
                                                                                    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                                                                                    outline: 'rgb(31, 32, 32) none 0px',
                                                                                    margin: '0px',
                                                                                    cursor: 'pointer',
                                                                                    userSelect: 'none',
                                                                                    verticalAlign: 'middle',
                                                                                    appearance: 'none',
                                                                                    textDecoration: 'none solid rgb(31, 32, 32)',
                                                                                    fontFamily: 'aktiv-grotesk, sans-serif',
                                                                                    minWidth: '64px',
                                                                                    transition: 'background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), color 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                                                                                    border: '0.8px solid rgba(31, 32, 32, 0.5)',
                                                                                    color: 'rgb(31, 32, 32)',
                                                                                    fontWeight: 500,
                                                                                    fontSize: '16px',
                                                                                    textTransform: 'none',
                                                                                    letterSpacing: '0.4px',
                                                                                    boxShadow: 'none',
                                                                                    borderRadius: '32px',
                                                                                    lineHeight: '16px',
                                                                                    flexDirection: 'row-reverse',
                                                                                    WebkitBoxPack: 'center',
                                                                                    justifyContent: 'center',
                                                                                    gap: '6px'
                                                                                }}>
                                          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                               data-testid="ArrowForwardOutlinedIcon" style={{
                                              fontSize: '20pxdisplay:block',
                                              display: 'block',
                                              overflow: 'hidden',
                                              fill: 'rgb(31, 32, 32)',
                                              verticalAlign: 'middle',
                                              boxSizing: 'border-box',
                                              userSelect: 'none',
                                              width: '1em',
                                              height: '20px',
                                              flexShrink: 0,
                                              transition: 'fill 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                                          }}>
                                              <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
                                                    style={{boxSizing: 'border-box'}}></path>
                                          </svg>
                                          Start for free<span style={{
                                          boxSizing: 'border-box',
                                          overflow: 'hidden',
                                          pointerEvents: 'none',
                                          position: 'absolute',
                                          zIndex: 0,
                                          inset: '0px',
                                          borderRadius: '32px'
                                      }}></span></a></div>
                                  </div>
                              </div>
                              <div style={{
                                  gap: '64px',
                                  paddingTop: '32px',
                                  paddingBottom: '16px',
                                  gridTemplateColumns: '538px 538px',
                                  textAlign: 'left',
                                  justifyItems: 'center',
                                  boxSizing: 'border-box',
                                  width: '100%',
                                  display: 'grid',
                                  WebkitBoxAlign: 'center',
                                  alignItems: 'center'
                              }}><img
                                  src="https://images.prismic.io/airdna-next/ZjMvSkMTzAJOCe3E_edge.png?auto=format,compress"
                                  alt="competitive edge" style={{
                                  order: 1,
                                  maxWidth: '460px',
                                  borderStyle: 'none',
                                  verticalAlign: 'middle',
                                  boxSizing: 'border-box',
                                  width: '100%'
                              }}/>
                                  <div style={{boxSizing: 'border-box', maxWidth: '495px', width: '100%'}}>
                                      <div type="light"
                                           style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                          <h3 style={{
                                              fontSize: '32px',
                                              marginBottom: '16px',
                                              boxSizing: 'border-box',
                                              lineHeight: '38.4px',
                                              fontWeight: 600,
                                              fontFamily: 'aktiv-grotesk, sans-serif',
                                              color: 'rgb(33, 33, 33)',
                                              margin: '0px 0px 16px',
                                              padding: '0px'
                                          }}>Gain a competitive edge</h3>
                                      </div>
                                      <div type="light"
                                           listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                           style={{
                                               marginBottom: '16px',
                                               boxSizing: 'border-box',
                                               padding: '0px',
                                               fontSize: '16px',
                                               lineHeight: '24px',
                                               letterSpacing: '0.15px'
                                           }}>
                                          <p style={{
                                              fontSize: '16px',
                                              letterSpacing: '0.15px',
                                              lineHeight: '24px',
                                              boxSizing: 'border-box',
                                              color: 'rgb(33, 33, 33)',
                                              fontFamily: 'aktiv-grotesk, sans-serif',
                                              margin: '0px',
                                              padding: '0px',
                                              fontWeight: 400
                                          }}>With GeoInsights' superior data, you gain a competitive edge in the marketplace
                                              and position yourself as an industry leader. Armed with accurate insights,
                                              you can make informed decisions that set you apart from the
                                              competition.</p>
                                      </div>
                                      <div style={{boxSizing: 'border-box'}}><a tabIndex="0"
                                                                                href="https://app.airdna.co/data/register"
                                                                                style={{
                                                                                    maxWidth: '484px',
                                                                                    width: '100%',
                                                                                    padding: '14px 20px',
                                                                                    backgroundColor: 'rgba(0, 0, 0, 0)',
                                                                                    boxSizing: 'border-box',
                                                                                    display: 'inline-flex',
                                                                                    WebkitBoxAlign: 'center',
                                                                                    alignItems: 'center',
                                                                                    position: 'relative',
                                                                                    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                                                                                    outline: 'rgb(31, 32, 32) none 0px',
                                                                                    margin: '0px',
                                                                                    cursor: 'pointer',
                                                                                    userSelect: 'none',
                                                                                    verticalAlign: 'middle',
                                                                                    appearance: 'none',
                                                                                    textDecoration: 'none solid rgb(31, 32, 32)',
                                                                                    fontFamily: 'aktiv-grotesk, sans-serif',
                                                                                    minWidth: '64px',
                                                                                    transition: 'background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), color 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                                                                                    border: '0.8px solid rgba(31, 32, 32, 0.5)',
                                                                                    color: 'rgb(31, 32, 32)',
                                                                                    fontWeight: 500,
                                                                                    fontSize: '16px',
                                                                                    textTransform: 'none',
                                                                                    letterSpacing: '0.4px',
                                                                                    boxShadow: 'none',
                                                                                    borderRadius: '32px',
                                                                                    lineHeight: '16px',
                                                                                    flexDirection: 'row-reverse',
                                                                                    WebkitBoxPack: 'center',
                                                                                    justifyContent: 'center',
                                                                                    gap: '6px'
                                                                                }}>
                                          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                               data-testid="ArrowForwardOutlinedIcon" style={{
                                              fontSize: '20pxdisplay:block',
                                              display: 'block',
                                              overflow: 'hidden',
                                              fill: 'rgb(31, 32, 32)',
                                              verticalAlign: 'middle',
                                              boxSizing: 'border-box',
                                              userSelect: 'none',
                                              width: '1em',
                                              height: '20px',
                                              flexShrink: 0,
                                              transition: 'fill 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                                          }}>
                                              <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
                                                    style={{boxSizing: 'border-box'}}></path>
                                          </svg>
                                          Start for free<span style={{
                                          boxSizing: 'border-box',
                                          overflow: 'hidden',
                                          pointerEvents: 'none',
                                          position: 'absolute',
                                          zIndex: 0,
                                          inset: '0px',
                                          borderRadius: '32px'
                                      }}></span></a></div>
                                  </div>
                              </div>
                              <div style={{
                                  gap: '64px',
                                  paddingTop: '32px',
                                  paddingBottom: '16px',
                                  gridTemplateColumns: '538px 538px',
                                  textAlign: 'left',
                                  justifyItems: 'center',
                                  boxSizing: 'border-box',
                                  width: '100%',
                                  display: 'grid',
                                  WebkitBoxAlign: 'center',
                                  alignItems: 'center'
                              }}><img
                                  src="https://images.prismic.io/airdna-next/ZjMvv0MTzAJOCe3S_enterprise.png?auto=format,compress"
                                  alt="Enterprise tools" style={{
                                  order: 0,
                                  maxWidth: '460px',
                                  borderStyle: 'none',
                                  verticalAlign: 'middle',
                                  boxSizing: 'border-box',
                                  width: '100%'
                              }}/>
                                  <div style={{boxSizing: 'border-box', maxWidth: '495px', width: '100%'}}>
                                      <div type="light"
                                           style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                          <h3 style={{
                                              fontSize: '32px',
                                              marginBottom: '16px',
                                              boxSizing: 'border-box',
                                              lineHeight: '38.4px',
                                              fontWeight: 600,
                                              fontFamily: 'aktiv-grotesk, sans-serif',
                                              color: 'rgb(33, 33, 33)',
                                              margin: '0px 0px 16px',
                                              padding: '0px'
                                          }}>Enterprise tools for businesses</h3>
                                      </div>
                                      <div type="light"
                                           listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                           style={{
                                               marginBottom: '16px',
                                               boxSizing: 'border-box',
                                               padding: '0px',
                                               fontSize: '16px',
                                               lineHeight: '24px',
                                               letterSpacing: '0.15px'
                                           }}>
                                          <ol style={{boxSizing: 'border-box'}}>
                                              <li style={{boxSizing: 'border-box'}}><strong
                                                  style={{fontWeight: 700, boxSizing: 'border-box'}}>Property
                                                  Performance Dashboard:</strong> Manage and track every property in
                                                  your market with our all-in-one dashboard.
                                              </li>
                                              <li style={{boxSizing: 'border-box'}}><strong
                                                  style={{fontWeight: 700, boxSizing: 'border-box'}}>Custom
                                                  APIs:</strong> Don’t see the platform you need? Custom connections
                                                  sync to any rental marketplace.
                                              </li>
                                          </ol>
                                      </div>
                                      <div style={{boxSizing: 'border-box'}}><a tabIndex="0"
                                                                                href="/direct-response/enterprise-solutions"
                                                                                style={{
                                                                                    maxWidth: '484px',
                                                                                    width: '100%',
                                                                                    padding: '14px 20px',
                                                                                    backgroundColor: 'rgba(0, 0, 0, 0)',
                                                                                    boxSizing: 'border-box',
                                                                                    display: 'inline-flex',
                                                                                    WebkitBoxAlign: 'center',
                                                                                    alignItems: 'center',
                                                                                    position: 'relative',
                                                                                    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                                                                                    outline: 'rgb(31, 32, 32) none 0px',
                                                                                    margin: '0px',
                                                                                    cursor: 'pointer',
                                                                                    userSelect: 'none',
                                                                                    verticalAlign: 'middle',
                                                                                    appearance: 'none',
                                                                                    textDecoration: 'none solid rgb(31, 32, 32)',
                                                                                    fontFamily: 'aktiv-grotesk, sans-serif',
                                                                                    minWidth: '64px',
                                                                                    transition: 'background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), color 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                                                                                    border: '0.8px solid rgba(31, 32, 32, 0.5)',
                                                                                    color: 'rgb(31, 32, 32)',
                                                                                    fontWeight: 500,
                                                                                    fontSize: '16px',
                                                                                    textTransform: 'none',
                                                                                    letterSpacing: '0.4px',
                                                                                    boxShadow: 'none',
                                                                                    borderRadius: '32px',
                                                                                    lineHeight: '16px',
                                                                                    flexDirection: 'row-reverse',
                                                                                    WebkitBoxPack: 'center',
                                                                                    justifyContent: 'center',
                                                                                    gap: '6px'
                                                                                }}>
                                          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                               data-testid="ArrowForwardOutlinedIcon" style={{
                                              fontSize: '20pxdisplay:block',
                                              display: 'block',
                                              overflow: 'hidden',
                                              fill: 'rgb(31, 32, 32)',
                                              verticalAlign: 'middle',
                                              boxSizing: 'border-box',
                                              userSelect: 'none',
                                              width: '1em',
                                              height: '20px',
                                              flexShrink: 0,
                                              transition: 'fill 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                                          }}>
                                              <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
                                                    style={{boxSizing: 'border-box'}}></path>
                                          </svg>
                                          Speak to an expert<span style={{
                                          boxSizing: 'border-box',
                                          overflow: 'hidden',
                                          pointerEvents: 'none',
                                          position: 'absolute',
                                          zIndex: 0,
                                          inset: '0px',
                                          borderRadius: '32px'
                                      }}></span></a></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
                  <section style={{paddingTop: '64px', paddingBottom: '64px', boxSizing: 'border-box'}}>
                      <div style={{
                          boxSizing: 'border-box',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          maxWidth: '1140px'
                      }}>
                          <div type="light" style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                              <h2 style={{
                                  boxSizing: 'border-box',
                                  textAlign: 'center',
                                  marginBottom: '16px',
                                  fontWeight: 600
                              }}>Choose your short-term rental journey</h2>
                          </div>
                          <div style={{
                              paddingTop: '56px',
                              paddingBottom: '56px',
                              flexDirection: 'row',
                              WebkitBoxAlign: 'stretch',
                              alignItems: 'stretch',
                              gap: '32px',
                              boxSizing: 'border-box',
                              display: 'flex',
                              WebkitBoxPack: 'center',
                              justifyContent: 'center'
                          }}>
                              <div style={{
                                  maxWidth: '314px',
                                  padding: '32px',
                                  flexDirection: 'column',
                                  WebkitBoxPack: 'center',
                                  justifyContent: 'center',
                                  boxSizing: 'border-box',
                                  backgroundColor: 'rgb(247, 248, 252)',
                                  display: 'flex',
                                  WebkitBoxAlign: 'center',
                                  alignItems: 'center',
                                  width: '100%',
                                  borderRadius: '20px'
                              }}><img
                                  src="https://airdna-next.cdn.prismic.io/airdna-next/ZiDnZPPdc1huKmQl_register.svg?auto=compress,format"
                                  alt="short-term rental" style={{
                                  maxWidth: '155px',
                                  borderStyle: 'none',
                                  verticalAlign: 'middle',
                                  boxSizing: 'border-box',
                                  width: '100%'
                              }}/>
                                  <div type="light" style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                      <h3 style={{
                                          fontSize: '30px',
                                          marginTop: '32px',
                                          marginBottom: '32px',
                                          boxSizing: 'border-box',
                                          lineHeight: '36px',
                                          textAlign: 'center',
                                          fontWeight: 600,
                                          fontFamily: 'aktiv-grotesk, sans-serif',
                                          color: 'rgb(33, 33, 33)',
                                          margin: '32px 0px',
                                          padding: '0px'
                                      }}>Register for free</h3>
                                  </div>
                              </div>
                              <div style={{
                                  maxWidth: '259px',
                                  display: 'none',
                                  flexDirection: 'column',
                                  gap: '53px',
                                  boxSizing: 'border-box',
                                  width: '100%',
                                  WebkitBoxPack: 'center',
                                  justifyContent: 'center'
                              }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="103" height="259" viewBox="0 0 103 259"
                                       fill="none" style={{
                                      maxHeight: 'fit-content',
                                      overflow: 'hidden',
                                      verticalAlign: 'middle',
                                      boxSizing: 'border-box'
                                  }}>
                                      <path
                                          d="M0.313596 242.864L3.24515 240.37L14.7103 251.647L14.7103 201.259C14.7103 184.848 22.4609 169.262 35.9942 158.462L78.9636 124.173C91.6135 114.07 98.8821 99.4927 98.8821 84.1452V0L102.898 0V84.1269C102.898 100.538 95.1474 116.124 81.6141 126.924L38.6447 161.213C25.9948 171.316 18.7262 185.893 18.7262 201.241L18.7262 251.629L30.1914 240.352L33.1229 242.846L16.6982 258.982L0.273437 242.846L0.313596 242.864Z"
                                          fill="black" fill-opacity="0.42" style={{boxSizing: 'border-box'}}></path>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="260" viewBox="0 0 35 260"
                                       fill="none" style={{
                                      maxHeight: 'fit-content',
                                      overflow: 'hidden',
                                      verticalAlign: 'middle',
                                      boxSizing: 'border-box'
                                  }}>
                                      <g clip-path="url(#clip0_384_7841)" style={{boxSizing: 'border-box'}}>
                                          <path
                                              d="M0.890625 242.962L3.84225 240.468L15.3075 251.726L15.3075 0.904297L19.3233 0.904297L19.3233 251.745L30.7885 240.468L33.7401 242.962L17.3154 259.098L0.890625 242.962Z"
                                              fill="black" fill-opacity="0.42" style={{boxSizing: 'border-box'}}></path>
                                      </g>
                                      <defs style={{boxSizing: 'border-box'}}>
                                          <clipPath style={{boxSizing: 'border-box'}}>
                                              <rect width="259" height="34" fill="white"
                                                    transform="matrix(0 1 1 0 0.5 0.5)"
                                                    style={{boxSizing: 'border-box'}}></rect>
                                          </clipPath>
                                      </defs>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="105" height="260" viewBox="0 0 105 260"
                                       fill="none" style={{
                                      maxHeight: 'fit-content',
                                      overflow: 'hidden',
                                      verticalAlign: 'middle',
                                      boxSizing: 'border-box'
                                  }}>
                                      <g clip-path="url(#clip0_384_7843)" style={{boxSizing: 'border-box'}}>
                                          <path
                                              d="M70.9625 243.364L73.8941 240.87L85.3593 252.147V201.759C85.3593 186.412 78.1108 171.816 65.4408 161.731L22.4713 127.442C8.93805 116.642 1.1875 101.056 1.1875 84.6452L1.1875 0.5L5.20333 0.5L5.20333 84.6269C5.20333 99.9743 12.4519 114.57 25.1218 124.655L68.0912 158.944C81.6245 169.744 89.3751 185.33 89.3751 201.741V252.129L100.84 240.852L103.772 243.346L87.3471 259.482L70.9223 243.346L70.9625 243.364Z"
                                              fill="black" fill-opacity="0.42" style={{boxSizing: 'border-box'}}></path>
                                      </g>
                                      <defs style={{boxSizing: 'border-box'}}>
                                          <clipPath style={{boxSizing: 'border-box'}}>
                                              <rect width="259" height="104" fill="white"
                                                    transform="matrix(0 1 1 0 0.5 0.5)"
                                                    style={{boxSizing: 'border-box'}}></rect>
                                          </clipPath>
                                      </defs>
                                  </svg>
                              </div>
                              <div style={{
                                  maxWidth: '259px',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: '53px',
                                  boxSizing: 'border-box',
                                  width: '100%',
                                  WebkitBoxPack: 'center',
                                  justifyContent: 'center'
                              }}>
                                  <svg width="259" height="103" viewBox="0 0 259 103" fill="none"
                                       xmlns="http://www.w3.org/2000/svg" style={{
                                      maxHeight: 'fit-content',
                                      overflow: 'hidden',
                                      verticalAlign: 'middle',
                                      boxSizing: 'border-box'
                                  }}>
                                      <path
                                          d="M242.864 0.313596L240.37 3.24515L251.647 14.7103H201.259C184.848 14.7103 169.262 22.4609 158.462 35.9942L124.173 78.9636C114.07 91.6135 99.4927 98.8821 84.1452 98.8821H0V102.898H84.1269C100.538 102.898 116.124 95.1474 126.924 81.6141L161.213 38.6447C171.316 25.9948 185.893 18.7262 201.241 18.7262H251.629L240.352 30.1914L242.846 33.1229L258.982 16.6982L242.846 0.273438L242.864 0.313596Z"
                                          fill="black" fill-opacity="0.42" style={{boxSizing: 'border-box'}}></path>
                                  </svg>
                                  <svg width="259" height="34" viewBox="0 0 259 34" fill="none"
                                       xmlns="http://www.w3.org/2000/svg" style={{
                                      maxHeight: 'fit-content',
                                      overflow: 'hidden',
                                      verticalAlign: 'middle',
                                      boxSizing: 'border-box'
                                  }}>
                                      <path
                                          d="M242.462 0.38916L239.968 3.34078L251.226 14.806H0.404297V18.8218H251.245L239.968 30.287L242.462 33.2386L258.598 16.8139L242.462 0.38916Z"
                                          fill="black" fill-opacity="0.42" style={{boxSizing: 'border-box'}}></path>
                                  </svg>
                                  <svg width="259" height="104" viewBox="0 0 259 104" fill="none"
                                       xmlns="http://www.w3.org/2000/svg" style={{
                                      maxHeight: 'fit-content',
                                      overflow: 'hidden',
                                      verticalAlign: 'middle',
                                      boxSizing: 'border-box'
                                  }}>
                                      <path
                                          d="M242.864 70.4645L240.37 73.3961L251.647 84.8613H201.259C185.912 84.8613 171.316 77.6127 161.231 64.9427L126.942 21.9733C116.142 8.44 100.556 0.689453 84.1452 0.689453H0V4.70528H84.1269C99.4743 4.70528 114.07 11.9539 124.155 24.6238L158.444 67.5932C169.244 81.1265 184.83 88.8771 201.241 88.8771H251.629L240.352 100.342L242.846 103.274L258.982 86.8491L242.846 70.4243L242.864 70.4645Z"
                                          fill="black" fill-opacity="0.42" style={{boxSizing: 'border-box'}}></path>
                                  </svg>
                              </div>
                              <div style={{
                                  gridTemplateColumns: '503px',
                                  maxWidth: '100%',
                                  boxSizing: 'border-box',
                                  width: '100%',
                                  flex: '1 1 0%',
                                  display: 'grid',
                                  justifyContent: 'stretch',
                                  gap: '12px'
                              }}>
                                  <div style={{
                                      flexDirection: 'row',
                                      gap: '32px',
                                      padding: '16px 16px 16px 46px',
                                      boxSizing: 'border-box',
                                      backgroundColor: 'rgb(247, 248, 252)',
                                      display: 'flex',
                                      WebkitBoxAlign: 'center',
                                      alignItems: 'center',
                                      WebkitBoxPack: 'start',
                                      justifyContent: 'flex-start',
                                      borderRadius: '20px'
                                  }}><img
                                      src="https://airdna-next.cdn.prismic.io/airdna-next/ZiDnYvPdc1huKmQj_explore.svg?auto=compress,format"
                                      alt="Explore" style={{
                                      maxWidth: '155px',
                                      borderStyle: 'none',
                                      verticalAlign: 'middle',
                                      boxSizing: 'border-box',
                                      width: '100%'
                                  }}/>
                                      <div type="light"
                                           style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                          <h3 style={{
                                              fontSize: '30px',
                                              marginTop: '32px',
                                              marginBottom: '32px',
                                              boxSizing: 'border-box',
                                              lineHeight: '36px',
                                              textAlign: 'center',
                                              fontWeight: 600,
                                              fontFamily: 'aktiv-grotesk, sans-serif',
                                              color: 'rgb(33, 33, 33)',
                                              margin: '32px 0px',
                                              padding: '0px'
                                          }}>Explore</h3>
                                      </div>
                                  </div>
                                  <div style={{
                                      flexDirection: 'row',
                                      gap: '32px',
                                      padding: '16px 16px 16px 46px',
                                      boxSizing: 'border-box',
                                      backgroundColor: 'rgb(247, 248, 252)',
                                      display: 'flex',
                                      WebkitBoxAlign: 'center',
                                      alignItems: 'center',
                                      WebkitBoxPack: 'start',
                                      justifyContent: 'flex-start',
                                      borderRadius: '20px'
                                  }}><img
                                      src="https://airdna-next.cdn.prismic.io/airdna-next/ZiDnYfPdc1huKmQi_evaluate.svg?auto=compress,format"
                                      alt="Evaluate" style={{
                                      maxWidth: '155px',
                                      borderStyle: 'none',
                                      verticalAlign: 'middle',
                                      boxSizing: 'border-box',
                                      width: '100%'
                                  }}/>
                                      <div type="light"
                                           style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                          <h3 style={{
                                              fontSize: '30px',
                                              marginTop: '32px',
                                              marginBottom: '32px',
                                              boxSizing: 'border-box',
                                              lineHeight: '36px',
                                              textAlign: 'center',
                                              fontWeight: 600,
                                              fontFamily: 'aktiv-grotesk, sans-serif',
                                              color: 'rgb(33, 33, 33)',
                                              margin: '32px 0px',
                                              padding: '0px'
                                          }}>Evaluate</h3>
                                      </div>
                                  </div>
                                  <div style={{
                                      flexDirection: 'row',
                                      gap: '32px',
                                      padding: '16px 16px 16px 46px',
                                      boxSizing: 'border-box',
                                      backgroundColor: 'rgb(247, 248, 252)',
                                      display: 'flex',
                                      WebkitBoxAlign: 'center',
                                      alignItems: 'center',
                                      WebkitBoxPack: 'start',
                                      justifyContent: 'flex-start',
                                      borderRadius: '20px'
                                  }}><img
                                      src="https://airdna-next.cdn.prismic.io/airdna-next/ZiDnY_Pdc1huKmQk_findProperty.svg?auto=compress,format"
                                      alt="property" style={{
                                      maxWidth: '155px',
                                      borderStyle: 'none',
                                      verticalAlign: 'middle',
                                      boxSizing: 'border-box',
                                      width: '100%'
                                  }}/>
                                      <div type="light"
                                           style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                          <h3 style={{
                                              fontSize: '30px',
                                              marginTop: '32px',
                                              marginBottom: '32px',
                                              boxSizing: 'border-box',
                                              lineHeight: '36px',
                                              textAlign: 'center',
                                              fontWeight: 600,
                                              fontFamily: 'aktiv-grotesk, sans-serif',
                                              color: 'rgb(33, 33, 33)',
                                              margin: '32px 0px',
                                              padding: '0px'
                                          }}>Find a property</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div style={{paddingTop: '64px', boxSizing: 'border-box', textAlign: 'center'}}><a
                              tabIndex="0" href="https://app.airdna.co/data/register" style={{
                              maxWidth: '484px',
                              width: '100%',
                              padding: '14px 20px',
                              backgroundColor: 'rgb(31, 32, 32)',
                              boxSizing: 'border-box',
                              display: 'inline-flex',
                              WebkitBoxAlign: 'center',
                              alignItems: 'center',
                              position: 'relative',
                              WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                              outline: 'rgb(255, 255, 255) none 0px',
                              border: '0px none rgb(255, 255, 255)',
                              margin: '0px',
                              cursor: 'pointer',
                              userSelect: 'none',
                              verticalAlign: 'middle',
                              appearance: 'none',
                              textDecoration: 'none solid rgb(255, 255, 255)',
                              fontFamily: 'aktiv-grotesk, sans-serif',
                              minWidth: '64px',
                              transition: 'background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), color 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                              fontWeight: 500,
                              fontSize: '16px',
                              textTransform: 'none',
                              letterSpacing: '0.4px',
                              boxShadow: 'none',
                              borderRadius: '32px',
                              color: 'rgb(255, 255, 255)',
                              lineHeight: '16px',
                              flexDirection: 'row-reverse',
                              WebkitBoxPack: 'center',
                              justifyContent: 'center',
                              gap: '6px'
                          }}>
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                   xmlns="http://www.w3.org/2000/svg" style={{
                                  display: 'block',
                                  overflow: 'hidden',
                                  verticalAlign: 'middle',
                                  boxSizing: 'border-box'
                              }}>
                                  <path
                                      d="M8.5876 5.57666L7.4126 6.75166L11.2293 10.5767L7.4126 14.4017L8.5876 15.5767L13.5876 10.5767L8.5876 5.57666Z"
                                      fill="white" style={{boxSizing: 'border-box'}}></path>
                              </svg>
                              Start for free<span style={{
                              boxSizing: 'border-box',
                              overflow: 'hidden',
                              pointerEvents: 'none',
                              position: 'absolute',
                              zIndex: 0,
                              inset: '0px',
                              borderRadius: '32px'
                          }}></span></a></div>
                      </div>
                  </section>
                  <div style={{
                      paddingTop: '32px',
                      paddingBottom: '64px',
                      boxSizing: 'border-box',
                      maxWidth: '1140px',
                      margin: 'auto'
                  }}>
                      <div style={{boxSizing: 'border-box', textAlign: 'center'}}>
                          <div type="light" style={{boxSizing: 'border-box', margin: '0px', padding: '0px 0px 16px'}}>
                              <h3 style={{
                                  boxSizing: 'border-box',
                                  fontSize: '42px',
                                  fontWeight: 500,
                                  lineHeight: '48px',
                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                  color: 'rgb(33, 33, 33)',
                                  margin: '0px',
                                  padding: '0px'
                              }}>Industry Insights</h3>
                          </div>
                          <div type="light" style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                              <p style={{
                                  fontSize: '28px',
                                  boxSizing: 'border-box',
                                  fontWeight: 600,
                                  marginTop: '0px',
                                  marginBottom: '0px'
                              }}>Discover the latest news, trends, and guides for STRs</p>
                          </div>
                      </div>
                      <div style={{boxSizing: 'border-box', position: 'relative', marginTop: '32px'}}>
                          <div style={{boxSizing: 'border-box'}}><a target="_self" rel=""
                                                                    href="/best-places-to-invest-in-vacation-rentals"
                                                                    style={{
                                                                        backgroundColor: 'rgba(0, 0, 0, 0)',
                                                                        boxSizing: 'border-box',
                                                                        color: 'rgb(0, 117, 224)',
                                                                        textDecoration: 'none solid rgb(0, 117, 224)',
                                                                        transition: '0.2s ease-in-out'
                                                                    }}>
                              <div style={{
                                  boxSizing: 'border-box',
                                  textAlign: 'center',
                                  width: '100%',
                                  borderRadius: '32px',
                                  overflow: 'hidden',
                                  maxHeight: '623px',
                                  height: '623px'
                              }}>
                                  <div style={{display: 'none', boxSizing: 'border-box'}}><img
                                      src="https://images.prismic.io/airdna-next/ZjMwM0MTzAJOCe3W_1ColumbusGA-1-.png?auto=format,compress"
                                      alt="animate-items" style={{
                                      borderStyle: 'none',
                                      verticalAlign: 'middle',
                                      boxSizing: 'border-box',
                                      width: '100%',
                                      height: '100%',
                                      overflow: 'hidden',
                                      animationName: 'Style_zoomOut',
                                      animationDuration: '5.5s',
                                      animationTimingFunction: 'ease-in-out',
                                      animationPlayState: 'running',
                                      animationFillMode: 'backwards',
                                      backfaceVisibility: 'hidden'
                                  }}/></div>
                                  <div style={{display: 'block', boxSizing: 'border-box'}}><img
                                      src="https://images.prismic.io/airdna-next/ZjMwM0MTzAJOCe3W_1ColumbusGA-1-.png?auto=format,compress"
                                      alt="animate-items" style={{
                                      borderStyle: 'none',
                                      verticalAlign: 'middle',
                                      boxSizing: 'border-box',
                                      width: '100%',
                                      overflow: 'hidden',
                                      animation: '5s ease-in-out 0s 1 normal backwards running Style_zoomOut',
                                      backfaceVisibility: 'hidden',
                                      height: '646.1px',
                                      animationName: 'Style_zoomOut',
                                      animationDuration: '5s',
                                      animationTimingFunction: 'ease-in-out',
                                      animationPlayState: 'running',
                                      animationFillMode: 'backwards'
                                  }}/></div>
                                  <div style={{display: 'none', boxSizing: 'border-box'}}><img
                                      src="https://images.prismic.io/airdna-next/ZjMw4EMTzAJOCe3c_2Ellsworth-ME.png?auto=format,compress"
                                      alt="animate-items" style={{
                                      borderStyle: 'none',
                                      verticalAlign: 'middle',
                                      boxSizing: 'border-box',
                                      width: '100%',
                                      height: '100%',
                                      overflow: 'hidden',
                                      animationName: 'Style_zoomOut',
                                      animationDuration: '5.5s',
                                      animationTimingFunction: 'ease-in-out',
                                      animationPlayState: 'running',
                                      animationFillMode: 'backwards',
                                      backfaceVisibility: 'hidden'
                                  }}/></div>
                                  <div style={{display: 'none', boxSizing: 'border-box'}}><img
                                      src="https://images.prismic.io/airdna-next/ZjMw30MTzAJOCe3b_3LoganOH.png?auto=format,compress"
                                      alt="animate-items" style={{
                                      borderStyle: 'none',
                                      verticalAlign: 'middle',
                                      boxSizing: 'border-box',
                                      width: '100%',
                                      height: '100%',
                                      overflow: 'hidden',
                                      animationName: 'Style_zoomOut',
                                      animationDuration: '5.5s',
                                      animationTimingFunction: 'ease-in-out',
                                      animationPlayState: 'running',
                                      animationFillMode: 'backwards',
                                      backfaceVisibility: 'hidden'
                                  }}/></div>
                                  <div style={{display: 'none', boxSizing: 'border-box'}}><img
                                      src="https://images.prismic.io/airdna-next/ZjMw3kMTzAJOCe3a_4Spring-HillFL.png?auto=format,compress"
                                      alt="animate-items" style={{
                                      borderStyle: 'none',
                                      verticalAlign: 'middle',
                                      boxSizing: 'border-box',
                                      width: '100%',
                                      height: '100%',
                                      overflow: 'hidden',
                                      animationName: 'Style_zoomOut',
                                      animationDuration: '5.5s',
                                      animationTimingFunction: 'ease-in-out',
                                      animationPlayState: 'running',
                                      animationFillMode: 'backwards',
                                      backfaceVisibility: 'hidden'
                                  }}/></div>
                              </div>
                              <div style={{
                                  paddingLeft: '64px',
                                  paddingRight: '64px',
                                  boxSizing: 'border-box',
                                  display: 'flex',
                                  WebkitBoxPack: 'center',
                                  justifyContent: 'center',
                                  alignItems: 'flex-start',
                                  flexDirection: 'column',
                                  gap: '4px',
                                  width: '100%',
                                  height: '623px',
                                  position: 'absolute',
                                  zIndex: 2,
                                  top: '0px',
                                  left: '0px',
                                  paddingTop: '64px',
                                  paddingBottom: '64px'
                              }}>
                                  <div type="light" style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                      <h4 style={{
                                          fontSize: '60px',
                                          boxSizing: 'border-box',
                                          fontWeight: 700,
                                          color: 'rgb(255, 255, 255)',
                                          lineHeight: '48px',
                                          fontFamily: 'aktiv-grotesk, sans-serif',
                                          margin: '0px',
                                          padding: '0px'
                                      }}>Best Places To Invest</h4>
                                  </div>
                                  <div style={{boxSizing: 'border-box', pointerEvents: 'none', width: '100%'}}>
                                      <div dir="ltr" style={{
                                          position: 'relative',
                                          display: 'block',
                                          boxSizing: 'border-box',
                                          userSelect: 'none',
                                          touchAction: 'pan-y',
                                          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
                                      }}>
                                          <div style={{
                                              height: '74px',
                                              transform: 'matrix(1, 0, 0, 1, 0, 0)',
                                              overflow: 'hidden',
                                              margin: '0px',
                                              padding: '0px',
                                              position: 'relative',
                                              display: 'block',
                                              boxSizing: 'border-box'
                                          }}>
                                              <div style={{
                                                  opacity: 1,
                                                  transform: 'matrix(1, 0, 0, 1, 0, -148)',
                                                  height: '518px',
                                                  position: 'relative',
                                                  top: '0px',
                                                  left: '0px',
                                                  display: 'block',
                                                  marginLeft: 'auto',
                                                  marginRight: 'auto',
                                                  boxSizing: 'border-box'
                                              }}>
                                                  <div data-index="-1" tabIndex="-1" aria-hidden="true" style={{
                                                      width: '1012px',
                                                      display: 'block',
                                                      height: 'auto',
                                                      border: '0.8px solid rgba(0, 0, 0, 0)',
                                                      float: 'left',
                                                      minHeight: '1px',
                                                      boxSizing: 'border-box'
                                                  }}>
                                                      <div style={{boxSizing: 'border-box'}}>
                                                          <div type="light" style={{
                                                              boxSizing: 'border-box',
                                                              margin: '0px',
                                                              padding: '0px'
                                                          }}>
                                                              <h4 style={{
                                                                  fontSize: '60px',
                                                                  boxSizing: 'border-box',
                                                                  lineHeight: '72px',
                                                                  fontWeight: 700,
                                                                  color: 'rgba(255, 255, 255, 0.72)',
                                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                                  margin: '0px',
                                                                  padding: '0px'
                                                              }}>Spring Hill, FL</h4>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div data-index="0" tabIndex="-1" aria-hidden="true" style={{
                                                      outline: 'none',
                                                      width: '1012px',
                                                      display: 'block',
                                                      height: 'auto',
                                                      border: '0.8px solid rgba(0, 0, 0, 0)',
                                                      float: 'left',
                                                      minHeight: '1px',
                                                      boxSizing: 'border-box'
                                                  }}>
                                                      <div style={{boxSizing: 'border-box'}}>
                                                          <div type="light" style={{
                                                              boxSizing: 'border-box',
                                                              margin: '0px',
                                                              padding: '0px'
                                                          }}>
                                                              <h4 style={{
                                                                  fontSize: '60px',
                                                                  boxSizing: 'border-box',
                                                                  lineHeight: '72px',
                                                                  fontWeight: 700,
                                                                  color: 'rgba(255, 255, 255, 0.72)',
                                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                                  margin: '0px',
                                                                  padding: '0px'
                                                              }}>2024</h4>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div data-index="1" tabIndex="-1" aria-hidden="false" style={{
                                                      outline: 'none',
                                                      width: '1012px',
                                                      display: 'block',
                                                      height: 'auto',
                                                      border: '0.8px solid rgba(0, 0, 0, 0)',
                                                      float: 'left',
                                                      minHeight: '1px',
                                                      boxSizing: 'border-box'
                                                  }}>
                                                      <div style={{boxSizing: 'border-box'}}>
                                                          <div type="light" style={{
                                                              boxSizing: 'border-box',
                                                              margin: '0px',
                                                              padding: '0px'
                                                          }}>
                                                              <h4 style={{
                                                                  fontSize: '60px',
                                                                  boxSizing: 'border-box',
                                                                  lineHeight: '72px',
                                                                  fontWeight: 700,
                                                                  color: 'rgba(255, 255, 255, 0.72)',
                                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                                  margin: '0px',
                                                                  padding: '0px'
                                                              }}>Columbus, GA</h4>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div data-index="2" tabIndex="-1" aria-hidden="true" style={{
                                                      outline: 'none',
                                                      width: '1012px',
                                                      display: 'block',
                                                      height: 'auto',
                                                      border: '0.8px solid rgba(0, 0, 0, 0)',
                                                      float: 'left',
                                                      minHeight: '1px',
                                                      boxSizing: 'border-box'
                                                  }}>
                                                      <div style={{boxSizing: 'border-box'}}>
                                                          <div type="light" style={{
                                                              boxSizing: 'border-box',
                                                              margin: '0px',
                                                              padding: '0px'
                                                          }}>
                                                              <h4 style={{
                                                                  fontSize: '60px',
                                                                  boxSizing: 'border-box',
                                                                  lineHeight: '72px',
                                                                  fontWeight: 700,
                                                                  color: 'rgba(255, 255, 255, 0.72)',
                                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                                  margin: '0px',
                                                                  padding: '0px'
                                                              }}>Ellsworth, ME</h4>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div data-index="3" tabIndex="-1" aria-hidden="true" style={{
                                                      outline: 'none',
                                                      width: '1012px',
                                                      display: 'block',
                                                      height: 'auto',
                                                      border: '0.8px solid rgba(0, 0, 0, 0)',
                                                      float: 'left',
                                                      minHeight: '1px',
                                                      boxSizing: 'border-box'
                                                  }}>
                                                      <div style={{boxSizing: 'border-box'}}>
                                                          <div type="light" style={{
                                                              boxSizing: 'border-box',
                                                              margin: '0px',
                                                              padding: '0px'
                                                          }}>
                                                              <h4 style={{
                                                                  fontSize: '60px',
                                                                  boxSizing: 'border-box',
                                                                  lineHeight: '72px',
                                                                  fontWeight: 700,
                                                                  color: 'rgba(255, 255, 255, 0.72)',
                                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                                  margin: '0px',
                                                                  padding: '0px'
                                                              }}>Logan, OH</h4>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div data-index="4" tabIndex="-1" aria-hidden="true" style={{
                                                      outline: 'none',
                                                      width: '1012px',
                                                      display: 'block',
                                                      height: 'auto',
                                                      border: '0.8px solid rgba(0, 0, 0, 0)',
                                                      float: 'left',
                                                      minHeight: '1px',
                                                      boxSizing: 'border-box'
                                                  }}>
                                                      <div style={{boxSizing: 'border-box'}}>
                                                          <div type="light" style={{
                                                              boxSizing: 'border-box',
                                                              margin: '0px',
                                                              padding: '0px'
                                                          }}>
                                                              <h4 style={{
                                                                  fontSize: '60px',
                                                                  boxSizing: 'border-box',
                                                                  lineHeight: '72px',
                                                                  fontWeight: 700,
                                                                  color: 'rgba(255, 255, 255, 0.72)',
                                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                                  margin: '0px',
                                                                  padding: '0px'
                                                              }}>Spring Hill, FL</h4>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div data-index="5" tabIndex="-1" aria-hidden="true" style={{
                                                      width: '1012px',
                                                      display: 'block',
                                                      height: 'auto',
                                                      border: '0.8px solid rgba(0, 0, 0, 0)',
                                                      float: 'left',
                                                      minHeight: '1px',
                                                      boxSizing: 'border-box'
                                                  }}>
                                                      <div style={{boxSizing: 'border-box'}}>
                                                          <div type="light" style={{
                                                              boxSizing: 'border-box',
                                                              margin: '0px',
                                                              padding: '0px'
                                                          }}>
                                                              <h4 style={{
                                                                  fontSize: '60px',
                                                                  boxSizing: 'border-box',
                                                                  lineHeight: '72px',
                                                                  fontWeight: 700,
                                                                  color: 'rgba(255, 255, 255, 0.72)',
                                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                                  margin: '0px',
                                                                  padding: '0px'
                                                              }}>2024</h4>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div data-index="6" tabIndex="-1" aria-hidden="true" style={{
                                                      width: '1012px',
                                                      display: 'block',
                                                      height: 'auto',
                                                      border: '0.8px solid rgba(0, 0, 0, 0)',
                                                      float: 'left',
                                                      minHeight: '1px',
                                                      boxSizing: 'border-box'
                                                  }}>
                                                      <div style={{boxSizing: 'border-box'}}>
                                                          <div type="light" style={{
                                                              boxSizing: 'border-box',
                                                              margin: '0px',
                                                              padding: '0px'
                                                          }}>
                                                              <h4 style={{
                                                                  fontSize: '60px',
                                                                  boxSizing: 'border-box',
                                                                  lineHeight: '72px',
                                                                  fontWeight: 700,
                                                                  color: 'rgba(255, 255, 255, 0.72)',
                                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                                  margin: '0px',
                                                                  padding: '0px'
                                                              }}>Columbus, GA</h4>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div data-index="7" tabIndex="-1" aria-hidden="true" style={{
                                                      width: '1012px',
                                                      display: 'block',
                                                      height: 'auto',
                                                      border: '0.8px solid rgba(0, 0, 0, 0)',
                                                      float: 'left',
                                                      minHeight: '1px',
                                                      boxSizing: 'border-box'
                                                  }}>
                                                      <div style={{boxSizing: 'border-box'}}>
                                                          <div type="light" style={{
                                                              boxSizing: 'border-box',
                                                              margin: '0px',
                                                              padding: '0px'
                                                          }}>
                                                              <h4 style={{
                                                                  fontSize: '60px',
                                                                  boxSizing: 'border-box',
                                                                  lineHeight: '72px',
                                                                  fontWeight: 700,
                                                                  color: 'rgba(255, 255, 255, 0.72)',
                                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                                  margin: '0px',
                                                                  padding: '0px'
                                                              }}>Ellsworth, ME</h4>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div data-index="8" tabIndex="-1" aria-hidden="true" style={{
                                                      width: '1012px',
                                                      display: 'block',
                                                      height: 'auto',
                                                      border: '0.8px solid rgba(0, 0, 0, 0)',
                                                      float: 'left',
                                                      minHeight: '1px',
                                                      boxSizing: 'border-box'
                                                  }}>
                                                      <div style={{boxSizing: 'border-box'}}>
                                                          <div type="light" style={{
                                                              boxSizing: 'border-box',
                                                              margin: '0px',
                                                              padding: '0px'
                                                          }}>
                                                              <h4 style={{
                                                                  fontSize: '60px',
                                                                  boxSizing: 'border-box',
                                                                  lineHeight: '72px',
                                                                  fontWeight: 700,
                                                                  color: 'rgba(255, 255, 255, 0.72)',
                                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                                  margin: '0px',
                                                                  padding: '0px'
                                                              }}>Logan, OH</h4>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div data-index="9" tabIndex="-1" aria-hidden="true" style={{
                                                      width: '1012px',
                                                      display: 'block',
                                                      height: 'auto',
                                                      border: '0.8px solid rgba(0, 0, 0, 0)',
                                                      float: 'left',
                                                      minHeight: '1px',
                                                      boxSizing: 'border-box'
                                                  }}>
                                                      <div style={{boxSizing: 'border-box'}}>
                                                          <div type="light" style={{
                                                              boxSizing: 'border-box',
                                                              margin: '0px',
                                                              padding: '0px'
                                                          }}>
                                                              <h4 style={{
                                                                  fontSize: '60px',
                                                                  boxSizing: 'border-box',
                                                                  lineHeight: '72px',
                                                                  fontWeight: 700,
                                                                  color: 'rgba(255, 255, 255, 0.72)',
                                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                                  margin: '0px',
                                                                  padding: '0px'
                                                              }}>Spring Hill, FL</h4>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <p type="light" style={{
                                      boxSizing: 'border-box',
                                      fontFamily: 'aktiv-grotesk, sans-serif',
                                      fontWeight: 400,
                                      fontSize: '16px',
                                      lineHeight: '24px',
                                      letterSpacing: '0.15px',
                                      margin: '0px',
                                      padding: '0px'
                                  }}>
                                      <h4 style={{
                                          boxSizing: 'border-box',
                                          color: 'rgb(255, 255, 255)',
                                          fontSize: '20px',
                                          fontWeight: 500,
                                          lineHeight: '24px',
                                          fontFamily: 'aktiv-grotesk, sans-serif',
                                          margin: '0px',
                                          padding: '0px'
                                      }}>Top 25 Places to invest in short-term rentals.</h4>
                                  </p>
                              </div>
                          </a></div>
                      </div>
                  </div>
                  <div style={{
                      padding: '64px 86px',
                      paddingLeft: '86px',
                      paddingRight: '86px',
                      boxSizing: 'border-box',
                      backgroundColor: 'rgb(239, 241, 253)',
                      marginLeft: '-16px',
                      marginRight: '-16px'
                  }}>
                      <div style={{
                          borderBottom: '13.6px solid rgb(0, 0, 0)',
                          boxSizing: 'border-box',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          maxWidth: '1211px'
                      }}>
                          <div style={{
                              paddingLeft: '16px',
                              paddingRight: '16px',
                              boxSizing: 'border-box',
                              marginLeft: 'auto',
                              marginRight: 'auto',
                              maxWidth: '1140px'
                          }}>
                              <div style={{
                                  gridTemplateColumns: '489.087px 586.912px',
                                  gap: '32px',
                                  paddingBottom: '45px',
                                  textAlign: 'left',
                                  boxSizing: 'border-box',
                                  display: 'grid',
                                  WebkitBoxAlign: 'center',
                                  alignItems: 'center'
                              }}>
                                  <div type="light" style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                      <h3 style={{
                                          boxSizing: 'border-box',
                                          fontWeight: 600,
                                          fontSize: '42px',
                                          lineHeight: '48px',
                                          fontFamily: 'aktiv-grotesk, sans-serif',
                                          color: 'rgb(33, 33, 33)',
                                          margin: '0px',
                                          padding: '0px'
                                      }}>Why choose GeoInsights?</h3>
                                  </div>
                                  <div type="light"
                                       listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                       style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                      <p style={{
                                          fontSize: '24px',
                                          letterSpacing: '0.15px',
                                          lineHeight: '28.8px',
                                          boxSizing: 'border-box',
                                          color: 'rgb(102, 102, 102)',
                                          fontWeight: 600,
                                          fontFamily: 'aktiv-grotesk, sans-serif',
                                          margin: '0px',
                                          padding: '0px'
                                      }}>Discover why thousands of hosts and investors trust GeoInsights’ short-term rental
                                          data.</p>
                                  </div>
                              </div>
                              <hr style={{
                                  color: 'rgb(0, 0, 0)',
                                  height: '0.8px',
                                  overflow: 'visible',
                                  boxSizing: 'border-box',
                                  margin: '0px',
                                  flexShrink: 0,
                                  borderWidth: '0px 0px 0.8px',
                                  borderStyle: 'solid',
                                  borderColor: 'rgba(0, 0, 0, 0.12)'
                              }}/>
                              <div style={{boxSizing: 'border-box', paddingTop: '32px', paddingBottom: '32px'}}>
                                  <div style={{
                                      gridTemplateColumns: '493.325px 542.675px',
                                      gap: '24px',
                                      paddingLeft: '24px',
                                      paddingRight: '24px',
                                      boxSizing: 'border-box',
                                      display: 'grid',
                                      marginTop: '0px'
                                  }}>
                                      <div style={{
                                          gap: '24px',
                                          boxSizing: 'border-box',
                                          display: 'grid',
                                          gridTemplateColumns: '48px auto',
                                          alignItems: 'self-start',
                                          marginTop: '0px'
                                      }}><img
                                          src="https://images.prismic.io/airdna-next/ZozNix5LeNNTw6y7_route1.png?auto=format,compress"
                                          alt="Comprehensive" style={{
                                          width: '48px',
                                          height: '48px',
                                          borderStyle: 'none',
                                          verticalAlign: 'middle',
                                          boxSizing: 'border-box',
                                          objectFit: 'contain'
                                      }}/>
                                          <div style={{boxSizing: 'border-box'}}>
                                              <div type="light"
                                                   style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                                  <h4 style={{
                                                      fontSize: '24px',
                                                      boxSizing: 'border-box',
                                                      margin: '0px',
                                                      color: 'rgb(33, 33, 33)',
                                                      fontWeight: 600
                                                  }}>Comprehensive coverage</h4>
                                              </div>
                                              <div type="light"
                                                   listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                                   style={{boxSizing: 'border-box', margin: '0px', padding: '8px 0px'}}>
                                                  <p style={{
                                                      fontSize: '16px',
                                                      letterSpacing: '0.15px',
                                                      lineHeight: '24px',
                                                      boxSizing: 'border-box',
                                                      color: 'rgb(33, 33, 33)',
                                                      fontFamily: 'aktiv-grotesk, sans-serif',
                                                      margin: '0px',
                                                      padding: '0px',
                                                      fontWeight: 400
                                                  }}>We provide short-term rental data powered by Airbnb and Vrbo data
                                                      from over 10 million properties across 120,000 global markets.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div style={{
                                          gap: '24px',
                                          boxSizing: 'border-box',
                                          display: 'grid',
                                          gridTemplateColumns: '48px auto',
                                          alignItems: 'self-start',
                                          marginTop: '0px'
                                      }}><img
                                          src="https://images.prismic.io/airdna-next/ZozNiB5LeNNTw6y4_chart-pie-simple-circle-dollar1.png?auto=format,compress"
                                          style={{
                                              width: '48px',
                                              height: '48px',
                                              borderStyle: 'none',
                                              verticalAlign: 'middle',
                                              boxSizing: 'border-box',
                                              objectFit: 'contain'
                                          }}/>
                                          <div style={{boxSizing: 'border-box'}}>
                                              <div type="light"
                                                   style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                                  <h4 style={{
                                                      fontSize: '24px',
                                                      boxSizing: 'border-box',
                                                      margin: '0px',
                                                      color: 'rgb(33, 33, 33)',
                                                      fontWeight: 600
                                                  }}>Accurate analytic</h4>
                                              </div>
                                              <div type="light"
                                                   listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                                   style={{boxSizing: 'border-box', margin: '0px', padding: '8px 0px'}}>
                                                  <p style={{
                                                      fontSize: '16px',
                                                      letterSpacing: '0.15px',
                                                      lineHeight: '24px',
                                                      boxSizing: 'border-box',
                                                      color: 'rgb(33, 33, 33)',
                                                      fontFamily: 'aktiv-grotesk, sans-serif',
                                                      margin: '0px',
                                                      padding: '0px',
                                                      fontWeight: 400
                                                  }}>Our Airbnb data analytics tools deliver precise insights, helping
                                                      you make informed decisions.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div style={{
                                          gap: '24px',
                                          boxSizing: 'border-box',
                                          display: 'grid',
                                          gridTemplateColumns: '48px auto',
                                          alignItems: 'self-start',
                                          marginTop: '0px'
                                      }}><img
                                          src="https://images.prismic.io/airdna-next/ZozNiR5LeNNTw6y5_following1.png?auto=format,compress"
                                          alt="User-friendly tools" style={{
                                          width: '48px',
                                          height: '48px',
                                          borderStyle: 'none',
                                          verticalAlign: 'middle',
                                          boxSizing: 'border-box',
                                          objectFit: 'contain'
                                      }}/>
                                          <div style={{boxSizing: 'border-box'}}>
                                              <div type="light"
                                                   style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                                  <h4 style={{
                                                      fontSize: '24px',
                                                      boxSizing: 'border-box',
                                                      margin: '0px',
                                                      color: 'rgb(33, 33, 33)',
                                                      fontWeight: 600
                                                  }}>User-friendly tools</h4>
                                              </div>
                                              <div type="light"
                                                   listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                                   style={{boxSizing: 'border-box', margin: '0px', padding: '8px 0px'}}>
                                                  <p style={{
                                                      fontSize: '16px',
                                                      letterSpacing: '0.15px',
                                                      lineHeight: '24px',
                                                      boxSizing: 'border-box',
                                                      color: 'rgb(33, 33, 33)',
                                                      fontFamily: 'aktiv-grotesk, sans-serif',
                                                      margin: '0px',
                                                      padding: '0px',
                                                      fontWeight: 400
                                                  }}>Our tools are designed for ease of use and actionable insights.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div style={{
                                          gap: '24px',
                                          boxSizing: 'border-box',
                                          display: 'grid',
                                          gridTemplateColumns: '48px auto',
                                          alignItems: 'self-start',
                                          marginTop: '0px'
                                      }}><img
                                          src="https://images.prismic.io/airdna-next/ZozNih5LeNNTw6y6_plant-seed-invest1.png?auto=format,compress"
                                          alt="Proven success" style={{
                                          width: '48px',
                                          height: '48px',
                                          borderStyle: 'none',
                                          verticalAlign: 'middle',
                                          boxSizing: 'border-box',
                                          objectFit: 'contain'
                                      }}/>
                                          <div style={{boxSizing: 'border-box'}}>
                                              <div type="light"
                                                   style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                                  <h4 style={{
                                                      fontSize: '24px',
                                                      boxSizing: 'border-box',
                                                      margin: '0px',
                                                      color: 'rgb(33, 33, 33)',
                                                      fontWeight: 600
                                                  }}>Proven success</h4>
                                              </div>
                                              <div type="light"
                                                   listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                                   style={{boxSizing: 'border-box', margin: '0px', padding: '8px 0px'}}>
                                                  <p style={{
                                                      fontSize: '16px',
                                                      letterSpacing: '0.15px',
                                                      lineHeight: '24px',
                                                      boxSizing: 'border-box',
                                                      color: 'rgb(33, 33, 33)',
                                                      fontFamily: 'aktiv-grotesk, sans-serif',
                                                      margin: '0px',
                                                      padding: '0px',
                                                      fontWeight: 400
                                                  }}>Users who leverage the GeoInsights app consistently see higher returns
                                                      on their investments.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div style={{
                                          gap: '24px',
                                          boxSizing: 'border-box',
                                          display: 'grid',
                                          gridTemplateColumns: '48px auto',
                                          alignItems: 'self-start',
                                          marginTop: '0px'
                                      }}><img
                                          src="https://images.prismic.io/airdna-next/ZozNjh5LeNNTw6y8_transporter1.png?auto=format,compress"
                                          alt="Tailored for all" style={{
                                          width: '48px',
                                          height: '48px',
                                          borderStyle: 'none',
                                          verticalAlign: 'middle',
                                          boxSizing: 'border-box',
                                          objectFit: 'contain'
                                      }}/>
                                          <div style={{boxSizing: 'border-box'}}>
                                              <div type="light"
                                                   style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                                  <h4 style={{
                                                      fontSize: '24px',
                                                      boxSizing: 'border-box',
                                                      margin: '0px',
                                                      color: 'rgb(33, 33, 33)',
                                                      fontWeight: 600
                                                  }}>Tailored for all</h4>
                                              </div>
                                              <div type="light"
                                                   listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                                   style={{boxSizing: 'border-box', margin: '0px', padding: '8px 0px'}}>
                                                  <p style={{
                                                      fontSize: '16px',
                                                      letterSpacing: '0.15px',
                                                      lineHeight: '24px',
                                                      boxSizing: 'border-box',
                                                      color: 'rgb(33, 33, 33)',
                                                      fontFamily: 'aktiv-grotesk, sans-serif',
                                                      margin: '0px',
                                                      padding: '0px',
                                                      fontWeight: 400
                                                  }}>Whether you're a first-time host or a large enterprise, our
                                                      solutions cater to all scales of short-term renting.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <a tabIndex="0" href="/" style={{
                                          maxWidth: '484px',
                                          padding: '13px 20px',
                                          marginLeft: '40px',
                                          backgroundColor: 'rgb(255, 255, 255)',
                                          boxSizing: 'border-box',
                                          display: 'flex',
                                          WebkitBoxAlign: 'center',
                                          alignItems: 'center',
                                          WebkitBoxPack: 'center',
                                          justifyContent: 'center',
                                          position: 'relative',
                                          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                                          outline: 'rgb(31, 32, 32) none 0px',
                                          margin: '0px 0px 13px 40px',
                                          cursor: 'pointer',
                                          userSelect: 'none',
                                          verticalAlign: 'middle',
                                          appearance: 'none',
                                          textDecoration: 'none solid rgb(31, 32, 32)',
                                          fontFamily: 'aktiv-grotesk, sans-serif',
                                          minWidth: '64px',
                                          transition: 'background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), color 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                                          border: '0.8px solid rgba(31, 32, 32, 0.5)',
                                          color: 'rgb(31, 32, 32)',
                                          fontWeight: 500,
                                          fontSize: '16px',
                                          textTransform: 'none',
                                          letterSpacing: '0.4px',
                                          boxShadow: 'none',
                                          borderRadius: '32px',
                                          height: '47.6px',
                                          alignSelf: 'flex-end',
                                          lineHeight: '16px',
                                          flexDirection: 'row-reverse',
                                          gap: '6px'
                                      }}>
                                          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                               data-testid="ArrowForwardOutlinedIcon" style={{
                                              fontSize: '20px',
                                              display: 'block',
                                              overflow: 'hidden',
                                              fill: 'rgb(31, 32, 32)',
                                              verticalAlign: 'middle',
                                              boxSizing: 'border-box',
                                              userSelect: 'none',
                                              width: '1em',
                                              height: '20px',
                                              flexShrink: 0,
                                              transition: 'fill 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                                          }}>
                                              <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
                                                    style={{boxSizing: 'border-box'}}></path>
                                          </svg>
                                          Start for free<span style={{
                                          boxSizing: 'border-box',
                                          overflow: 'hidden',
                                          pointerEvents: 'none',
                                          position: 'absolute',
                                          zIndex: 0,
                                          inset: '0px',
                                          borderRadius: '32px'
                                      }}></span></a>
                                  </div>
                              </div>
                          </div>
                          <div style={{
                              borderTop: '24px solid rgb(0, 0, 0)',
                              borderRight: '24px solid rgb(0, 0, 0)',
                              borderLeft: '24px solid rgb(0, 0, 0)',
                              borderImage: 'none',
                              borderBottom: '0px none rgb(0, 0, 0)',
                              width: '95%',
                              boxSizing: 'border-box',
                              maxWidth: '1140px',
                              borderTopLeftRadius: '50px',
                              borderTopRightRadius: '50px',
                              overflow: 'hidden',
                              margin: 'auto'
                          }}><img
                              src="https://images.prismic.io/airdna-next/ZouMYx5LeNNTw43y_Frame427320118.png?auto=format,compress"
                              alt="short term rental " style={{
                              borderStyle: 'none',
                              verticalAlign: 'middle',
                              boxSizing: 'border-box',
                              width: '100%',
                              maxHeight: '385px',
                              margin: 'auto',
                              objectFit: 'cover'
                          }}/></div>
                      </div>
                  </div>
                  <section style={{
                      padding: '137px 86px',
                      boxSizing: 'border-box',
                      marginLeft: '-16px',
                      marginRight: '-16px',
                      background: 'rgb(239, 241, 253) none repeat scroll 0% 0% / auto padding-box border-box'
                  }}>
                      <div style={{
                          paddingLeft: '27.5px',
                          paddingRight: '27.5px',
                          boxSizing: 'border-box',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          maxWidth: '1140px'
                      }}>
                          <div style={{
                              gap: '37px',
                              paddingBottom: '32px',
                              boxSizing: 'border-box',
                              display: 'flex',
                              flexDirection: 'column',
                              maxWidth: '851px',
                              marginLeft: 'auto',
                              marginRight: 'auto',
                              textAlign: 'center',
                              fontWeight: 600
                          }}>
                              <div type="light" style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                  <h3 style={{
                                      boxSizing: 'border-box',
                                      fontWeight: 600,
                                      fontSize: '42px',
                                      lineHeight: '48px',
                                      fontFamily: 'aktiv-grotesk, sans-serif',
                                      color: 'rgb(33, 33, 33)',
                                      margin: '0px',
                                      padding: '0px'
                                  }}>Grow your business with the expert insights and advice</h3>
                              </div>
                              <div type="light"
                                   listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                   style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                  <p style={{
                                      fontSize: '24px',
                                      letterSpacing: '0.15px',
                                      lineHeight: '36px',
                                      boxSizing: 'border-box',
                                      color: 'rgb(33, 33, 33)',
                                      fontFamily: 'aktiv-grotesk, sans-serif',
                                      margin: '0px',
                                      padding: '0px',
                                      fontWeight: 400
                                  }}>Dive into a wealth of knowledge designed to empower hosts and investors. Our
                                      comprehensive resources include:</p>
                              </div>
                          </div>
                          <hr style={{
                              marginTop: '32px',
                              marginBottom: '32px',
                              color: 'rgb(0, 0, 0)',
                              height: '0.8px',
                              overflow: 'visible',
                              boxSizing: 'border-box',
                              flexShrink: 0,
                              borderWidth: '0px 0px 0.8px',
                              borderStyle: 'solid',
                              borderColor: 'rgba(0, 0, 0, 0.12)'
                          }}/>
                          <div style={{boxSizing: 'border-box'}}>
                              <div style={{
                                  gap: '37px',
                                  gridTemplateColumns: '337px 337px 337px',
                                  paddingTop: '32px',
                                  boxSizing: 'border-box',
                                  display: 'grid',
                                  paddingBottom: '0px',
                                  marginTop: '0px'
                              }}>
                                  <div style={{boxSizing: 'border-box', textAlign: 'center', width: '100%'}}>
                                      <div style={{boxSizing: 'border-box'}}><img
                                          src="https://images.prismic.io/airdna-next/ZozQOB5LeNNTw6zW_workshop-2.png?auto=format%2Ccompress&amp;rect=0%2C0%2C83%2C83&amp;w=82&amp;h=82"
                                          style={{
                                              maxHeight: '224px',
                                              width: '60px',
                                              borderStyle: 'none',
                                              verticalAlign: 'middle',
                                              boxSizing: 'border-box',
                                              height: '60px',
                                              margin: 'auto',
                                              objectFit: 'contain'
                                          }}/>
                                          <div type="light" style={{
                                              paddingTop: '29px',
                                              paddingBottom: '16px',
                                              boxSizing: 'border-box',
                                              margin: '0px'
                                          }}>
                                              <h4 style={{
                                                  fontSize: '32px',
                                                  fontWeight: 600,
                                                  boxSizing: 'border-box',
                                                  lineHeight: '38.4px',
                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                  color: 'rgb(33, 33, 33)',
                                                  margin: '0px',
                                                  padding: '0px'
                                              }}><a href="https://www.airdna.co/resources/guides" target="_self"
                                                    rel="noopener" style={{
                                                  backgroundColor: 'rgba(0, 0, 0, 0)',
                                                  boxSizing: 'border-box',
                                                  textDecoration: 'underline solid rgb(33, 33, 33)',
                                                  color: 'rgb(33, 33, 33)'
                                              }}>Guides &amp; tutorials</a></h4>
                                          </div>
                                          <div type="light"
                                               listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                               style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                              <p style={{
                                                  fontSize: '16px',
                                                  letterSpacing: '0.15px',
                                                  lineHeight: '24px',
                                                  boxSizing: 'border-box',
                                                  color: 'rgb(33, 33, 33)',
                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                  margin: '0px',
                                                  padding: '0px',
                                                  fontWeight: 400
                                              }}>Step-by-step instructions to maximize your STR investments using
                                                  short-term rental data.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div style={{boxSizing: 'border-box', textAlign: 'center', width: '100%'}}>
                                      <div style={{boxSizing: 'border-box'}}><img
                                          src="https://images.prismic.io/airdna-next/ZozQNh5LeNNTw6zU_blog-text1.png?auto=format%2Ccompress&amp;rect=0%2C1%2C82%2C82&amp;w=82&amp;h=82"
                                          style={{
                                              maxHeight: '224px',
                                              width: '60px',
                                              borderStyle: 'none',
                                              verticalAlign: 'middle',
                                              boxSizing: 'border-box',
                                              height: '60px',
                                              margin: 'auto',
                                              objectFit: 'contain'
                                          }}/>
                                          <div type="light" style={{
                                              paddingTop: '29px',
                                              paddingBottom: '16px',
                                              boxSizing: 'border-box',
                                              margin: '0px'
                                          }}>
                                              <h4 style={{
                                                  fontSize: '32px',
                                                  fontWeight: 600,
                                                  boxSizing: 'border-box',
                                                  lineHeight: '38.4px',
                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                  color: 'rgb(33, 33, 33)',
                                                  margin: '0px',
                                                  padding: '0px'
                                              }}><a href="https://www.airdna.co/resources/blog" target="_self"
                                                    rel="noopener" style={{
                                                  backgroundColor: 'rgba(0, 0, 0, 0)',
                                                  boxSizing: 'border-box',
                                                  textDecoration: 'underline solid rgb(33, 33, 33)',
                                                  color: 'rgb(33, 33, 33)'
                                              }}>Blog &amp; articles</a></h4>
                                          </div>
                                          <div type="light"
                                               listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                               style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                              <p style={{
                                                  fontSize: '16px',
                                                  letterSpacing: '0.15px',
                                                  lineHeight: '24px',
                                                  boxSizing: 'border-box',
                                                  color: 'rgb(33, 33, 33)',
                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                  margin: '0px',
                                                  padding: '0px',
                                                  fontWeight: 400
                                              }}>Stay updated with the latest news, trends, and tips in the short-term
                                                  rental industry.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div style={{boxSizing: 'border-box', textAlign: 'center', width: '100%'}}>
                                      <div style={{boxSizing: 'border-box'}}><img
                                          src="https://images.prismic.io/airdna-next/ZozQNx5LeNNTw6zV_tour-guide-people1.png?auto=format%2Ccompress&amp;rect=0%2C0%2C83%2C83&amp;w=82&amp;h=82"
                                          style={{
                                              maxHeight: '224px',
                                              width: '60px',
                                              borderStyle: 'none',
                                              verticalAlign: 'middle',
                                              boxSizing: 'border-box',
                                              height: '60px',
                                              margin: 'auto',
                                              objectFit: 'contain'
                                          }}/>
                                          <div type="light" style={{
                                              paddingTop: '29px',
                                              paddingBottom: '16px',
                                              boxSizing: 'border-box',
                                              margin: '0px'
                                          }}>
                                              <h4 style={{
                                                  fontSize: '32px',
                                                  fontWeight: 600,
                                                  boxSizing: 'border-box',
                                                  lineHeight: '38.4px',
                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                  color: 'rgb(33, 33, 33)',
                                                  margin: '0px',
                                                  padding: '0px'
                                              }}><a href="https://www.airdna.co/resources/video" target="_self"
                                                    rel="noopener" style={{
                                                  backgroundColor: 'rgba(0, 0, 0, 0)',
                                                  boxSizing: 'border-box',
                                                  textDecoration: 'underline solid rgb(33, 33, 33)',
                                                  color: 'rgb(33, 33, 33)'
                                              }}>Webinars</a></h4>
                                          </div>
                                          <div type="light"
                                               listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                               style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                              <p style={{
                                                  fontSize: '16px',
                                                  letterSpacing: '0.15px',
                                                  lineHeight: '24px',
                                                  boxSizing: 'border-box',
                                                  color: 'rgb(33, 33, 33)',
                                                  fontFamily: 'aktiv-grotesk, sans-serif',
                                                  margin: '0px',
                                                  padding: '0px',
                                                  fontWeight: 400
                                              }}>Learn from industry experts and stay ahead of market trends with
                                                  short-term rental analytics.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
                  <section style={{boxSizing: 'border-box', marginTop: '93px'}}></section>
                  <div style={{paddingTop: '40px', paddingBottom: '40px', boxSizing: 'border-box', margin: '0px'}}>
                      <div style={{maxWidth: '800px', boxSizing: 'border-box', margin: '0px auto'}}>
                          <div type="light" style={{
                              marginBottom: '32px',
                              boxSizing: 'border-box',
                              padding: '0px',
                              textAlign: 'center',
                              fontSize: '42px',
                              fontWeight: 700,
                              lineHeight: '38px'
                          }}>
                              <h2 style={{
                                  boxSizing: 'border-box',
                                  fontSize: '42px',
                                  fontWeight: 700,
                                  lineHeight: '38px'
                              }}>Your questions answered</h2>
                          </div>
                          <div style={{
                              paddingTop: '22.14px',
                              paddingLeft: '0px',
                              paddingRight: '0px',
                              gridTemplateColumns: '678px',
                              boxSizing: 'border-box',
                              display: 'grid',
                              gap: '16px 24px',
                              maxWidth: '678px',
                              margin: 'auto'
                          }}>
                              <div style={{
                                  paddingLeft: '20px',
                                  paddingRight: '20px',
                                  boxSizing: 'border-box',
                                  border: '0.8px solid rgba(31, 32, 32, 0.3)',
                                  borderRadius: '32px',
                                  backgroundColor: 'rgb(247, 248, 252)',
                                  paddingTop: '14px',
                                  paddingBottom: '14px',
                                  margin: '0px'
                              }}><input type="checkbox" style={{
                                  padding: '0px',
                                  overflow: 'visible',
                                  margin: '0px',
                                  boxSizing: 'border-box',
                                  position: 'absolute',
                                  opacity: 0,
                                  zIndex: -1
                              }}/><label htmlFor="How do I use AirDNA?_0" style={{boxSizing: 'border-box'}}>
                                  <div type="light" style={{boxSizing: 'border-box', padding: '0px', margin: '0px'}}>
                                      <h3 style={{
                                          boxSizing: 'border-box',
                                          fontSize: '20px',
                                          fontWeight: 500,
                                          lineHeight: '20px',
                                          paddingRight: '50px',
                                          position: 'relative',
                                          cursor: 'pointer',
                                          transition: 'color 0.35s',
                                          margin: '0px',
                                          fontFamily: 'aktiv-grotesk, sans-serif',
                                          color: 'rgb(33, 33, 33)',
                                          padding: '0px 50px 0px 0px'
                                      }}>How do I use GeoInsights?</h3>
                                  </div>
                              </label>
                                  <div type="light"
                                       listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                       style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                      <p style={{
                                          fontSize: '18px',
                                          letterSpacing: '0.15px',
                                          lineHeight: '24px',
                                          boxSizing: 'border-box',
                                          maxHeight: '0px',
                                          transition: '0.35s',
                                          fontWeight: 400,
                                          overflow: 'hidden',
                                          color: 'rgb(33, 33, 33)',
                                          fontFamily: 'aktiv-grotesk, sans-serif',
                                          margin: '0px',
                                          padding: '0px'
                                      }}>GeoInsights is easy to use and intuitive whether you want to use Rentalizer, analyze
                                          a specific market, or access Smart Rates™. First, create a free account and
                                          explore the app. Once you’ve got an initial idea of where you’d like to invest
                                          or how you’d like to optimize your short-term rental, select your subscription
                                          plan. You’ll be able to find details on your desired market, revenue
                                          projections, and pricing recommendations.</p>
                                  </div>
                              </div>
                              <div style={{
                                  paddingLeft: '20px',
                                  paddingRight: '20px',
                                  boxSizing: 'border-box',
                                  border: '0.8px solid rgba(31, 32, 32, 0.3)',
                                  borderRadius: '32px',
                                  backgroundColor: 'rgb(247, 248, 252)',
                                  paddingTop: '14px',
                                  paddingBottom: '14px',
                                  margin: '0px'
                              }}><input type="checkbox" style={{
                                  padding: '0px',
                                  overflow: 'visible',
                                  margin: '0px',
                                  boxSizing: 'border-box',
                                  position: 'absolute',
                                  opacity: 0,
                                  zIndex: -1
                              }}/><label htmlFor="How does GeoInsights gather the data?_1" style={{boxSizing: 'border-box'}}>
                                  <div type="light" style={{boxSizing: 'border-box', padding: '0px', margin: '0px'}}>
                                      <h3 style={{
                                          boxSizing: 'border-box',
                                          fontSize: '20px',
                                          fontWeight: 500,
                                          lineHeight: '20px',
                                          paddingRight: '50px',
                                          position: 'relative',
                                          cursor: 'pointer',
                                          transition: 'color 0.35s',
                                          margin: '0px',
                                          fontFamily: 'aktiv-grotesk, sans-serif',
                                          color: 'rgb(33, 33, 33)',
                                          padding: '0px 50px 0px 0px'
                                      }}>How does GeoInsights gather the data?</h3>
                                  </div>
                              </label>
                                  <div type="light"
                                       listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                       style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                      <p style={{
                                          fontSize: '18px',
                                          letterSpacing: '0.15px',
                                          lineHeight: '24px',
                                          boxSizing: 'border-box',
                                          maxHeight: '0px',
                                          transition: '0.35s',
                                          fontWeight: 400,
                                          overflow: 'hidden',
                                          color: 'rgb(33, 33, 33)',
                                          fontFamily: 'aktiv-grotesk, sans-serif',
                                          margin: '0px',
                                          padding: '0px'
                                      }}>GeoInsights collects short-term rental data from public and proprietary sources,
                                          including Airbnb and Vrbo data. We continuously monitor over 10 million
                                          properties in 120,000 markets worldwide. Our team employs sophisticated data
                                          analytics to ensure the data is accurate and up-to-date, providing you with
                                          reliable insights for your short-term rental decisions. You can learn more <a
                                              href="https://www.airdna.co/airdna-accuracy" target="_blank"
                                              rel="noopener" style={{
                                              backgroundColor: 'rgba(0, 0, 0, 0)',
                                              boxSizing: 'border-box',
                                              textDecoration: 'underline solid rgb(33, 33, 33)',
                                              cursor: 'pointer',
                                              fontWeight: 500,
                                              color: 'rgb(33, 33, 33)'
                                          }}>here</a>.&nbsp;</p>
                                  </div>
                              </div>
                              <div style={{
                                  paddingLeft: '20px',
                                  paddingRight: '20px',
                                  boxSizing: 'border-box',
                                  border: '0.8px solid rgba(31, 32, 32, 0.3)',
                                  borderRadius: '32px',
                                  backgroundColor: 'rgb(247, 248, 252)',
                                  paddingTop: '14px',
                                  paddingBottom: '14px',
                                  margin: '0px'
                              }}><input type="checkbox" style={{
                                  padding: '0px',
                                  overflow: 'visible',
                                  margin: '0px',
                                  boxSizing: 'border-box',
                                  position: 'absolute',
                                  opacity: 0,
                                  zIndex: -1
                              }}/><label htmlFor="What do I get with an GeoInsights subscription?_2"
                                         style={{boxSizing: 'border-box'}}>
                                  <div type="light" style={{boxSizing: 'border-box', padding: '0px', margin: '0px'}}>
                                      <h3 style={{
                                          boxSizing: 'border-box',
                                          fontSize: '20px',
                                          fontWeight: 500,
                                          lineHeight: '20px',
                                          paddingRight: '50px',
                                          position: 'relative',
                                          cursor: 'pointer',
                                          transition: 'color 0.35s',
                                          margin: '0px',
                                          fontFamily: 'aktiv-grotesk, sans-serif',
                                          color: 'rgb(33, 33, 33)',
                                          padding: '0px 50px 0px 0px'
                                      }}>What do I get with an GeoInsights subscription?</h3>
                                  </div>
                              </label>
                                  <div type="light"
                                       listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                       style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                      <p style={{
                                          fontSize: '18px',
                                          letterSpacing: '0.15px',
                                          lineHeight: '24px',
                                          boxSizing: 'border-box',
                                          maxHeight: '0px',
                                          transition: '0.35s',
                                          fontWeight: 400,
                                          overflow: 'hidden',
                                          color: 'rgb(33, 33, 33)',
                                          fontFamily: 'aktiv-grotesk, sans-serif',
                                          margin: '0px',
                                          padding: '0px'
                                      }}>&nbsp;An GeoInsights subscription gives you access to a suite of tools designed to
                                          optimize your short-term rental investments. These include market analysis,
                                          Smart Rates™ for dynamic pricing recommendations, and Rentalizer for
                                          estimating property revenue. Subscribers also receive detailed reports on
                                          market trends, rental analysis, and access to our support team for
                                          personalized assistance.</p>
                                  </div>
                              </div>
                              <div style={{
                                  paddingLeft: '20px',
                                  paddingRight: '20px',
                                  boxSizing: 'border-box',
                                  border: '0.8px solid rgba(31, 32, 32, 0.3)',
                                  borderRadius: '32px',
                                  backgroundColor: 'rgb(247, 248, 252)',
                                  paddingTop: '14px',
                                  paddingBottom: '14px',
                                  margin: '0px'
                              }}><input type="checkbox" style={{
                                  padding: '0px',
                                  overflow: 'visible',
                                  margin: '0px',
                                  boxSizing: 'border-box',
                                  position: 'absolute',
                                  opacity: 0,
                                  zIndex: -1
                              }}/><label htmlFor="How accurate are GeoInsights' market research tools?_3"
                                         style={{boxSizing: 'border-box'}}>
                                  <div type="light" style={{boxSizing: 'border-box', padding: '0px', margin: '0px'}}>
                                      <h3 style={{
                                          boxSizing: 'border-box',
                                          fontSize: '20px',
                                          fontWeight: 500,
                                          lineHeight: '20px',
                                          paddingRight: '50px',
                                          position: 'relative',
                                          cursor: 'pointer',
                                          transition: 'color 0.35s',
                                          margin: '0px',
                                          fontFamily: 'aktiv-grotesk, sans-serif',
                                          color: 'rgb(33, 33, 33)',
                                          padding: '0px 50px 0px 0px'
                                      }}>How accurate are GeoInsights' market research tools?</h3>
                                  </div>
                              </label>
                                  <div type="light"
                                       listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                       style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                      <p style={{
                                          fontSize: '18px',
                                          letterSpacing: '0.15px',
                                          lineHeight: '24px',
                                          boxSizing: 'border-box',
                                          maxHeight: '0px',
                                          transition: '0.35s',
                                          fontWeight: 400,
                                          overflow: 'hidden',
                                          color: 'rgb(33, 33, 33)',
                                          fontFamily: 'aktiv-grotesk, sans-serif',
                                          margin: '0px',
                                          padding: '0px'
                                      }}>&nbsp;GeoInsights’ data is between <a href="https://www.airdna.co/airdna-accuracy"
                                                                           target="_blank" rel="noopener" style={{
                                          backgroundColor: 'rgba(0, 0, 0, 0)',
                                          boxSizing: 'border-box',
                                          textDecoration: 'underline solid rgb(33, 33, 33)',
                                          cursor: 'pointer',
                                          fontWeight: 500,
                                          color: 'rgb(33, 33, 33)'
                                      }}>95-99% accurate</a> across Vrbo and Airbnb (<a
                                          href="https://www.airdna.co/blog/airdna-data-accuracy-is-right-on-the-money-according"
                                          target="_blank" rel="noopener" style={{
                                          backgroundColor: 'rgba(0, 0, 0, 0)',
                                          boxSizing: 'border-box',
                                          textDecoration: 'underline solid rgb(33, 33, 33)',
                                          cursor: 'pointer',
                                          fontWeight: 500,
                                          color: 'rgb(33, 33, 33)'
                                      }}>Q4 2023 - we were 99% accurate</a>). This ensures that our market research
                                          tools are not only current but also highly accurate.</p>
                                  </div>
                              </div>
                              <div style={{
                                  paddingLeft: '20px',
                                  paddingRight: '20px',
                                  boxSizing: 'border-box',
                                  border: '0.8px solid rgba(31, 32, 32, 0.3)',
                                  borderRadius: '32px',
                                  backgroundColor: 'rgb(247, 248, 252)',
                                  paddingTop: '14px',
                                  paddingBottom: '14px',
                                  margin: '0px'
                              }}><input type="checkbox" style={{
                                  padding: '0px',
                                  overflow: 'visible',
                                  margin: '0px',
                                  boxSizing: 'border-box',
                                  position: 'absolute',
                                  opacity: 0,
                                  zIndex: -1
                              }}/><label htmlFor="Can GeoInsights' tools help me find new investment properties?_4"
                                         style={{boxSizing: 'border-box'}}>
                                  <div type="light" style={{boxSizing: 'border-box', padding: '0px', margin: '0px'}}>
                                      <h3 style={{
                                          boxSizing: 'border-box',
                                          fontSize: '20px',
                                          fontWeight: 500,
                                          lineHeight: '20px',
                                          paddingRight: '50px',
                                          position: 'relative',
                                          cursor: 'pointer',
                                          transition: 'color 0.35s',
                                          margin: '0px',
                                          fontFamily: 'aktiv-grotesk, sans-serif',
                                          color: 'rgb(33, 33, 33)',
                                          padding: '0px 50px 0px 0px'
                                      }}>Can GeoInsights' tools help me find new investment properties?</h3>
                                  </div>
                              </label>
                                  <div type="light"
                                       listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                       style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                      <p style={{
                                          fontSize: '18px',
                                          letterSpacing: '0.15px',
                                          lineHeight: '24px',
                                          boxSizing: 'border-box',
                                          maxHeight: '0px',
                                          transition: '0.35s',
                                          fontWeight: 400,
                                          overflow: 'hidden',
                                          color: 'rgb(33, 33, 33)',
                                          fontFamily: 'aktiv-grotesk, sans-serif',
                                          margin: '0px',
                                          padding: '0px'
                                      }}>&nbsp;Absolutely! Our investment insights feature allows you to explore and
                                          analyze properties for sale. By using our rental research tool, you can
                                          identify lucrative opportunities and make informed investment decisions based
                                          on comprehensive rental analysis, including revenue per room, occupancy rates,
                                          seasonality and much more.</p>
                                  </div>
                              </div>
                              <div style={{
                                  paddingLeft: '20px',
                                  paddingRight: '20px',
                                  boxSizing: 'border-box',
                                  border: '0.8px solid rgba(31, 32, 32, 0.3)',
                                  borderRadius: '32px',
                                  backgroundColor: 'rgb(247, 248, 252)',
                                  paddingTop: '14px',
                                  paddingBottom: '14px',
                                  margin: '0px'
                              }}><input type="checkbox" style={{
                                  padding: '0px',
                                  overflow: 'visible',
                                  margin: '0px',
                                  boxSizing: 'border-box',
                                  position: 'absolute',
                                  opacity: 0,
                                  zIndex: -1
                              }}/><label htmlFor="What support does GeoInsights offer for enterprise users?_5"
                                         style={{boxSizing: 'border-box'}}>
                                  <div type="light" style={{boxSizing: 'border-box', padding: '0px', margin: '0px'}}>
                                      <h3 style={{
                                          boxSizing: 'border-box',
                                          fontSize: '20px',
                                          fontWeight: 500,
                                          lineHeight: '20px',
                                          paddingRight: '50px',
                                          position: 'relative',
                                          cursor: 'pointer',
                                          transition: 'color 0.35s',
                                          margin: '0px',
                                          fontFamily: 'aktiv-grotesk, sans-serif',
                                          color: 'rgb(33, 33, 33)',
                                          padding: '0px 50px 0px 0px'
                                      }}>What support does GeoInsights offer for enterprise users?</h3>
                                  </div>
                              </label>
                                  <div type="light"
                                       listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg"
                                       style={{boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
                                      <p style={{
                                          fontSize: '18px',
                                          letterSpacing: '0.15px',
                                          lineHeight: '24px',
                                          boxSizing: 'border-box',
                                          maxHeight: '0px',
                                          transition: '0.35s',
                                          fontWeight: 400,
                                          overflow: 'hidden',
                                          color: 'rgb(33, 33, 33)',
                                          fontFamily: 'aktiv-grotesk, sans-serif',
                                          margin: '0px',
                                          padding: '0px'
                                      }}>GeoInsights provides advanced solutions for enterprise users, including custom APIs
                                          for seamless integration with your systems. Enterprises can boost customer
                                          insights, inform investment decisions, optimize revenue management, and
                                          receive dynamic pricing recommendations. Our Property Performance Dashboard
                                          allows you to manage and track multiple properties effortlessly. For more
                                          tailored solutions, <a
                                              href="https://www.airdna.co/direct-response/enterprise-solutions"
                                              target="_blank" rel="noopener" style={{
                                              backgroundColor: 'rgba(0, 0, 0, 0)',
                                              boxSizing: 'border-box',
                                              textDecoration: 'underline solid rgb(33, 33, 33)',
                                              cursor: 'pointer',
                                              fontWeight: 500,
                                              color: 'rgb(33, 33, 33)'
                                          }}>speak to our experts</a>.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <section style={{boxSizing: 'border-box', marginTop: '93px'}}></section>
                  <section style={{
                      padding: '94px',
                      boxSizing: 'border-box',
                      backgroundColor: 'rgb(247, 248, 252)',
                      width: '100%',
                      position: 'relative',
                      transformStyle: 'preserve-3d'
                  }}></section>
              </main>
          </div>
      </div>
      <next-route-announcer style={{boxSizing: 'border-box'}}>
          <p aria-live="assertive" role="alert" style={{
              border: '0px',
              clip: 'rect(0px, 0px, 0px, 0px)',
              height: '1px',
              margin: '-1px',
              overflow: 'hidden',
              padding: '0px',
              position: 'absolute',
              width: '1px',
              whiteSpace: 'nowrap',
              overflowWrap: 'normal',
              boxSizing: 'border-box'
          }}></p>
      </next-route-announcer>
      <iframe allow="join-ad-interest-group" data-tagging-id="G-EQ37P58RZZ" data-load-time="1724577400079" height="0"
              width="0"
              src="https://td.doubleclick.net/td/ga/rul?tid=G-EQ37P58RZZ&amp;gacid=2099740257.1724577400&amp;gtm=45je48l0v883251035za200&amp;dma=0&amp;gcd=13l3l3l3l1l1&amp;npa=0&amp;pscdl=noapi&amp;aip=1&amp;fledge=1&amp;frm=0&amp;tag_exp=0&amp;z=2111159603"
              style={{
                  display: 'none',
                  visibility: 'hidden',
                  borderStyle: 'none',
                  verticalAlign: 'middle',
                  boxSizing: 'border-box'
              }}></iframe>
      <iframe src="https://airdna-next.prismic.io/prismic-toolbar/4.1.1/iframe.html" style={{
          display: 'none !important',
          borderStyle: 'none',
          verticalAlign: 'middle',
          boxSizing: 'border-box'
      }}></iframe>
      <div style={{
          boxSizing: 'border-box',
          top: '0px',
          zIndex: 9999,
          height: '729.6px',
          width: '100%',
          position: 'fixed',
          display: 'block',
          margin: '0px',
          padding: '0px',
          overflow: 'visible',
          transformStyle: 'preserve-3d',
          background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box',
          backfaceVisibility: 'hidden',
          pointerEvents: 'none',
          left: '0px'
      }}>
          <div style={{
              boxSizing: 'border-box',
              position: 'absolute',
              pointerEvents: 'none',
              width: '101vw',
              height: '736.888px',
              background: 'rgba(0, 0, 0, 0.7) none repeat scroll 0% 0% / auto padding-box border-box',
              opacity: 0,
              zIndex: -1
          }}></div>
      </div>
      <div style={{
          boxSizing: 'border-box',
          bottom: '0px',
          position: 'fixed',
          display: 'block',
          width: '100%',
          height: '0px',
          margin: '0px',
          padding: '0px',
          overflow: 'visible',
          transformStyle: 'preserve-3d',
          background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box',
          backfaceVisibility: 'hidden',
          pointerEvents: 'none',
          left: '0px',
          zIndex: 9998
      }}></div>
      <div style={{boxSizing: 'border-box'}}>
          <div style={{boxSizing: 'border-box', left: '0px', top: '0px', position: 'fixed', zIndex: 9989}}>
          </div>
          <div style={{boxSizing: 'border-box', right: '0px', top: '0px', position: 'fixed', zIndex: 9989}}>
          </div>
          <div style={{boxSizing: 'border-box', left: '0px', bottom: '0px', position: 'fixed', zIndex: 9989}}>
          </div>
          <div style={{boxSizing: 'border-box', right: '0px', bottom: '0px', position: 'fixed', zIndex: 9989}}>
          </div>
      </div>
      <iframe allow="join-ad-interest-group" data-tagging-id="AW-941117257" data-load-time="1724577401914" height="0"
              width="0"
              src="https://td.doubleclick.net/td/rul/941117257?random=1724577401888&amp;cv=11&amp;fst=1724577401888&amp;fmt=3&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;gtm=45be48l0v9166924226za200&amp;gcd=13l3l3l3l1l1&amp;dma=0&amp;tag_exp=0&amp;u_w=1536&amp;u_h=864&amp;url=https%3A%2F%2Fwww.airdna.co%2F&amp;hn=www.googleadservices.com&amp;frm=0&amp;tiba=AirDNA%20%7C%20Short-Term%20Rental%20Data%20Analytics%20%7C%20Vrbo%20%26%20Airbnb%20Data&amp;npa=0&amp;pscdl=noapi&amp;auid=1597465369.1724577402&amp;uaa=x86&amp;uab=64&amp;uafvl=Not)A%253BBrand%3B99.0.0.0%7CGoogle%2520Chrome%3B127.0.6533.120%7CChromium%3B127.0.6533.120&amp;uamb=0&amp;uam=&amp;uap=Windows&amp;uapv=15.0.0&amp;uaw=0&amp;fledge=1&amp;data=event%3Dgtag.config"
              style={{
                  display: 'none',
                  visibility: 'hidden',
                  borderStyle: 'none',
                  verticalAlign: 'middle',
                  boxSizing: 'border-box'
              }}></iframe>
      <div key="1505171259" theme_id="0" style={{
          boxSizing: 'border-box',
          position: 'absolute',
          lineHeight: '18px',
          transition: 'none',
          top: '0px',
          left: '0px',
          width: '100%',
          height: '729.6px',
          zIndex: 2147483638,
          pointerEvents: 'none',
          sidebarWidth: '0px',
          direction: 'ltr', display: 'block', outline: 'rgb(0, 0, 0) none 0px'}}></div>
      <meta name="p:domain_verify" content="5ce7284583e6befd100275293e309482" style={{boxSizing: 'border-box'}}/>
      </body>

      </html>

  );
}

export default App;
