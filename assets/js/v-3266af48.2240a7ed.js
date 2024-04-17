"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[87104],{935981:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-3266af48","path":"/devices/TERNCY-SD01.html","title":"TERNCY TERNCY-SD01 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TERNCY TERNCY-SD01 control via MQTT","description":"Integrate your TERNCY TERNCY-SD01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-02-26T17:45:15.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Channel","slug":"channel","link":"#channel","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Deprecated click event","slug":"deprecated-click-event","link":"#deprecated-click-event","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Direction (text)","slug":"direction-text","link":"#direction-text","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1713375938000},"filePathRelative":"devices/TERNCY-SD01.md"}')},903232:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var n=i(166252);const a=(0,n._)("h1",{id:"terncy-terncy-sd01",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#terncy-terncy-sd01","aria-hidden":"true"},"#"),(0,n.Uk)(" TERNCY TERNCY-SD01")],-1),l=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),d=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"TERNCY-SD01")],-1),o=(0,n._)("td",null,"Vendor",-1),s=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Knob smart dimmer")],-1),c=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"battery, action, direction, linkquality")],-1),r=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TERNCY-SD01.png",alt:"TERNCY TERNCY-SD01"})])],-1),u=(0,n._)("h2",{id:"notes",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,n.Uk)(" Notes")],-1),h=(0,n._)("h3",{id:"channel",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#channel","aria-hidden":"true"},"#"),(0,n.Uk)(" Channel")],-1),p={href:"https://github.com/Koenkk/zigbee2mqtt/discussions/7259#discussioncomment-6012304",target:"_blank",rel:"noopener noreferrer"},k=(0,n.uE)('<h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press and hold the knob on the device for 8 seconds (until the indicator blinks blue light 3 times) the indicator will continue blinking blue light if pairing is successful otherwise it will blink red light.</p><h3 id="deprecated-click-event" tabindex="-1"><a class="header-anchor" href="#deprecated-click-event" aria-hidden="true">#</a> Deprecated click event</h3><p>By default this device exposes a deprecated <code>click</code> event. It&#39;s recommended to use the <code>action</code> event instead.</p><p>To disable the <code>click</code> event, set <code>legacy: false</code> for this device in <code>configuration.yaml</code>. Example:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">devices</span><span class="token punctuation">:</span>\n  <span class="token key atrule">&#39;0x12345678&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_device\n    <span class="token key atrule">legacy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',6),m=(0,n._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,n.Uk)(" OTA updates")],-1),g=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),v=(0,n.uE)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>double</code>, <code>triple</code>, <code>quadruple</code>, <code>rotate</code>.</p><h3 id="direction-text" tabindex="-1"><a class="header-anchor" href="#direction-text" aria-hidden="true">#</a> Direction (text)</h3><p>Value can be found in the published state on the <code>direction</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),b={},f=(0,i(983744).Z)(b,[["render",function(e,t){const i=(0,n.up)("RouterLink"),b=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),a,(0,n._)("table",null,[l,(0,n._)("tbody",null,[d,(0,n._)("tr",null,[o,(0,n._)("td",null,[(0,n.Wm)(i,{to:"/supported-devices/#v=TERNCY"},{default:(0,n.w5)((()=>[(0,n.Uk)("TERNCY")])),_:1})])]),s,c,r])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,h,(0,n._)("p",null,[(0,n.Uk)("This device "),(0,n._)("a",p,[(0,n.Uk)("does not work"),(0,n.Wm)(b)]),(0,n.Uk)(" on Zigbee channel 20-24.")]),k,(0,n.kq)(" Notes END: Do not edit below this line "),m,(0,n._)("p",null,[(0,n.Uk)("This device supports OTA updates, for more information see "),(0,n.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,n.w5)((()=>[(0,n.Uk)("OTA updates")])),_:1}),(0,n.Uk)(".")]),g,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})])]),v])}]])}}]);