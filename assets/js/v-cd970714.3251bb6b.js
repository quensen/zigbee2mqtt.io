"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[69732],{438180:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-cd970714","path":"/devices/41ECSFWMZ-VW.html","title":"Schneider Electric 41ECSFWMZ-VW control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric 41ECSFWMZ-VW control via MQTT","description":"Integrate your Schneider Electric 41ECSFWMZ-VW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-01-31T20:08:01.000Z"},"excerpt":"","headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Fan","slug":"fan","link":"#fan","children":[]},{"level":3,"title":"Indicator mode (enum)","slug":"indicator-mode-enum","link":"#indicator-mode-enum","children":[]},{"level":3,"title":"Indicator orientation (enum)","slug":"indicator-orientation-enum","link":"#indicator-orientation-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1713375938000},"filePathRelative":"devices/41ECSFWMZ-VW.md"}')},512980:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var i=o(166252);const d=(0,i._)("h1",{id:"schneider-electric-41ecsfwmz-vw",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#schneider-electric-41ecsfwmz-vw","aria-hidden":"true"},"#"),(0,i.Uk)(" Schneider Electric 41ECSFWMZ-VW")],-1),a=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"41ECSFWMZ-VW")],-1),c=(0,i._)("td",null,"Vendor",-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Wiser 40/300-Series Module AC Fan Controller")],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"fan (state, mode), indicator_mode, indicator_orientation, linkquality")],-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/41ECSFWMZ-VW.png",alt:"Schneider Electric 41ECSFWMZ-VW"})])],-1),s=(0,i._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,i.Uk)(" OTA updates")],-1),h=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="fan" tabindex="-1"><a class="header-anchor" href="#fan" aria-hidden="true">#</a> Fan</h3><p>The current state of this fan is in the published state under the <code>fan_state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this fan publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_state&quot;: &quot;ON&quot;}</code> or <code>{&quot;fan_state&quot;: &quot;OFF&quot;}</code>. To read the current state of this fan publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;fan_state&quot;: &quot;&quot;}</code>. To change the mode publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_mode&quot;: VALUE}</code> where <code>VALUE</code> can be: <code>off</code>, <code>low</code>, <code>medium</code>, <code>high</code>, <code>on</code>.</p><h3 id="indicator-mode-enum" tabindex="-1"><a class="header-anchor" href="#indicator-mode-enum" aria-hidden="true">#</a> Indicator mode (enum)</h3><p>Set Indicator Mode.. Value can be found in the published state on the <code>indicator_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;indicator_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>always_on</code>, <code>on_with_timeout_but_as_locator</code>, <code>on_with_timeout</code>.</p><h3 id="indicator-orientation-enum" tabindex="-1"><a class="header-anchor" href="#indicator-orientation-enum" aria-hidden="true">#</a> Indicator orientation (enum)</h3><p>Set Indicator Orientation.. Value can be found in the published state on the <code>indicator_orientation</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;indicator_orientation&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_orientation&quot;: NEW_VALUE}</code>. The possible values are: <code>horizontal_left</code>, <code>horizontal_right</code>, <code>vertical_top</code>, <code>vertical_bottom</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),p={},m=(0,o(983744).Z)(p,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),d,(0,i._)("table",null,[a,(0,i._)("tbody",null,[n,(0,i._)("tr",null,[c,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,i.w5)((()=>[(0,i.Uk)("Schneider Electric")])),_:1})])]),r,l,u])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),s,(0,i._)("p",null,[(0,i.Uk)("This device supports OTA updates, for more information see "),(0,i.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[(0,i.Uk)("OTA updates")])),_:1}),(0,i.Uk)(".")]),h])}]])}}]);