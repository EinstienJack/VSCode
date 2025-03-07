Feature: Karate UI Automation framework learning

Background:
  * configure driver = { type: 'chrome' }

Scenario: Testing UI Feature
  Given driver 'https://google.com'

Scenario: Read Data from JSon
  * def userData = call read 'data/payLoad.json'
  * karate.log(userData.name)
