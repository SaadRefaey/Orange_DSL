// Network section. Content comes from: Authentication, No/Slow Browsing/Browsing Sites,
// Slow Download/Upload, Online Gaming, Connection/Wi-Fi Unstable.
// Node: { t, d, c: [[label, nextId]], link: { label, to }, sr, sr2, s: [arabic scripts], tab, esc, end }

const NET = 'Data Tech Con Support-Network';
const L3 = 'L3-DSL Fixed Technical Consumer Support';
const SR = (code, area, o = {}) => ({
  code, type: o.type || 'DSL Fault For Connectivity', area, sub: o.sub || '', product: o.product || 'ADSL',
  owner: o.owner || NET, sla: o.sla || '24 Hours',
});
const ESC_NET = 'If the customer calls and there is no update on the SR after the SLA, email Consumer Support DSL-Network to speed up the resolution. Feedback comes within the same working day (except Friday & Saturday).';
const ESC_L3 = 'If the SLA is exceeded, send an email to Egypt L3 Technical Consumer Support (L3consumersupport-eg@orange.com).';
const S24 = 'تمام يا أستاذ/ة...... أنا سجلت الطلب وبستأذن حضرتك نسيب الراوتر متوصل وفي خلال الـ 24 ساعة اللي جاية هتكون الخدمة شغالة بصورة طبيعية، وفي حالة إن حضرتك واجهت نفس المشكلة بعد 24 ساعة ممكن تعاود الاتصال بينا مرة تانية.';
const SCALL = 'تمام يا أستاذ/ة...... أنا سجلت الطلب لحضرتك وفي خلال الـ 24 ساعة اللي جاية فيه حد هيتواصل مع حضرتك من جانبنا لحل المشكلة ونستأذنك تسيب الراوتر شغال.';
const SAUTH = 'تمام يا أستاذ/ة أنا قدمت لحضرتك طلب والمشكلة هتكون اتحلت خلال الـ 24 ساعة القادمة، محتاج حضرتك تسيب الراوتر شغال، ولو بعد 24 ساعة المشكلة لسه موجودة ممكن حضرتك تشرفنا بالاتصال مرة تانية.';
const SURGENT = 'هقدم لحضرتك طلب استعجال وهيتم الرد في أسرع وقت ممكن.. شكرا لتفهمك.';
const SPORT = 'تمام يا أستاذ/ة...... أنا سجلت طلب حضرتك وفي حد من الدعم الفني بيتابع الشكوى، وفي خلال 48 ساعة عمل هتكون الخدمة شغالة بصورة طبيعية عند حضرتك، هستأذنك نسيب الراوتر متوصل.';

const RATES = [['Profile (Mbps)', 'Copper min. speed test (45%)', 'MSAN min. speed test (65%)'],
  ['1', '0.45 Mbps', '0.65 Mbps'], ['2', '0.9 Mbps', '1.3 Mbps'], ['4', '1.8 Mbps', '2.6 Mbps'], ['6', '2.7 Mbps', '3.9 Mbps'],
  ['8', '3.6 Mbps', '5.2 Mbps'], ['10', '4.5 Mbps', '6.5 Mbps'], ['12', '5.4 Mbps', '7.8 Mbps'], ['14', '6.3 Mbps', '9.1 Mbps'],
  ['16', '7.2 Mbps', '10.4 Mbps'], ['18', '8.1 Mbps', '11.7 Mbps'], ['20', '9 Mbps', '13 Mbps'], ['22', '9.9 Mbps', '14.3 Mbps'],
  ['24', '10.8 Mbps', '15.6 Mbps'], ['25', '11.3 Mbps', '16.2 Mbps'], ['27', '12.2 Mbps', '17.5 Mbps'], ['30', '13.5 Mbps', '19.5 Mbps'],
  ['40', '--', '26 Mbps'], ['50', '--', '32.5 Mbps'], ['60', '--', '39 Mbps'], ['70', '--', '45.5 Mbps'], ['100', '--', '65 Mbps'], ['200', '--', '130 Mbps']];

const OPEN = 'Orange Pedia → Products → Home DSL Packages → How to Complain → ';
export const NETWORK_FLOWS = [
  { id: 'auth', title: 'Authentication', icon: '🔐', start: 'au_start', about: 'Line is physically up but the customer has no IP.' },
  { id: 'nobrowse', title: 'No Browsing', icon: '🚫', start: 'nb_start', about: 'Connected with IP, router LEDs fine, no website opens.' },
  { id: 'slowbrowse', title: 'Slow Browsing', icon: '🐌', start: 'sb_start', about: 'Internet works but browsing is slow.' },
  { id: 'sites', title: 'Browsing Sites Problem', icon: '🌍', start: 'bs_start', about: 'Internet works except one or a few websites.' },
  { id: 'slowdown', title: 'Slow Download', icon: '⬇️', start: 'sd_start', about: 'Quota, QOS, bit rate, congestion, speed test.' },
  { id: 'slowup', title: 'Slow Upload', icon: '⬆️', start: 'su_start', about: 'Upload speed is low.' },
  { id: 'gaming', title: 'Online Gaming', icon: '🎮', start: 'og_start', about: 'High ping, lag, game disconnects.' },
  { id: 'unstable', title: 'Connection Unstable', icon: '🔁', start: 'cu_start', about: 'Port Up Time and IP login time do not match.' },
  { id: 'wifi', title: 'Wi-Fi Instability', icon: '📶', start: 'wf_start', about: 'Only the Wi-Fi is unstable; the line is stable.' },
];

export const NETWORK_HOW = {
  Authentication: OPEN + 'Authentication Problem',
  'No Browsing': OPEN + 'Network → No Browsing',
  'Slow Browsing': OPEN + 'Network → Slow Browsing',
  'Browsing Sites Problem': OPEN + 'Technical → Browsing Sites Problem',
  'Slow Download': OPEN + 'Technical → DSL – Slow Download',
  'Slow Upload': OPEN + 'Network → Slow Upload',
  'Online Gaming': OPEN + 'Network → View All → Online Gaming',
  'Connection Unstable': OPEN + 'Network → Connection Unstable',
  'Wi-Fi Instability': OPEN + 'Network → Connection Unstable → Wi-Fi Instability',
};

export const NETWORK_TOOLS = [
  ['FTTH Tool', 'MSAN: Get Port Parameters, Port Up Time, Cross Connection (VLANs), Lock/Unlock port, Change profile speed.'],
  ['Octopus', 'Copper: line parameters, session logs, logical connection, Port Reset / Update, congested POP check.'],
  ['IP Tool', 'Check the IP and last login date. "No Customer Found" means no IP.'],
  ['PCRF (Siebel)', 'Quota consumption, QOS profile and redirection flags.'],
  ['TE Portal / TCP tool', 'Lock then Unlock port for MSAN; check if the cabinet has traffic; compare Cabinet Code & Inner VLAN.'],
  ['Assist hunt 08100', 'Call to fix a Cabinet Code or Inner VLAN mismatch (the Assist member closes the SR).'],
  ['TR069 / router page', 'Router simulation, username, MTU, Wi-Fi channel & password.'],
  ['speedtest.net', 'Speed test to compare with the minimum accepted rate.'],
];

export const NETWORK_NODES = {
  // ---------- AUTHENTICATION ----------
  au_start: { t: 'Authentication: line up with no IP', d: 'Customer complains the DSL service is not working and the Internet LED is Off or Red. Confirm the line is physically up (FTTH Tool for MSAN, Octopus for Copper), then open the IP Tool: it shows "No Customer Found". Check the session logs on Octopus.',
    c: [['Login Ok', 'au_ok'], ['Login Failed', 'au_failed'], ['No Logs', 'au_nolog'], ['"Connect Issue" in the logical connection', 'au_connect']] },
  au_ok: { t: 'Login is OK: reset the port', d: 'Session logs show a successful login. Reset the customer port via FTTH Tool or Octopus (Copper: Port Reset then Update. MSAN: Lock then Unlock).', c: [['Customer can browse', 'au_ok_sr'], ['Still can not browse', 'au_restart']] },
  au_ok_sr: { t: 'Create and close the SR', d: 'The customer can browse after the port reset.', sr: SR('40008', 'Authentication Problem', { type: 'Fault For Connectivity', sub: 'Solved - Port Reset', owner: 'DSL Call Center', sla: '—' }), end: true },
  au_restart: { t: 'Restart the router', d: 'Ask the customer to restart the router (unplug and plug it again).', c: [['Customer can browse', 'au_restart_sr'], ['Not solved', 'au_sr']] },
  au_restart_sr: { t: 'Create and close the SR', d: 'The problem is solved after restarting the router.', sr: SR('40008', 'Authentication Problem', { type: 'Fault For Connectivity', sub: 'Solved - CPE Restarted', owner: 'DSL CC', sla: '—' }), end: true },
  au_sr: { t: 'Open the Authentication SR', d: 'Inform the customer to keep the router connected for the next 24 hours. Once the SR is opened it should be auto-assigned to the robot (DSL Authentication Admin); if not, assign it manually.',
    s: [SAUTH], sr: SR('40008', 'Authentication Problem', { type: 'Fault For Connectivity', owner: 'DSL Authentication Admin' }) },
  au_failed: { t: 'Login Failed: match the username', d: 'Match the username in the session logs (Octopus) with the username on Siebel.',
    c: [['Wrong Username (small difference)', 'au_wrong'], ['TR069 (totally different username)', 'au_tr'], ['Another ISP in the log', 'au_isp'], ['Usernames match', 'au_matched']] },
  au_wrong: { t: 'Wrong username', d: 'The log has a minor difference from the Siebel username (a missing or wrong digit, a symbol, a space, capital or small letter). Open the router page and change the username to match Siebel. If not solved, reset and reconfigure the router. If still not solved, create the SR for the concerned team.',
    sr: SR('40008', 'Authentication Problem', { type: 'Fault For Connectivity', sub: 'Solved - Username configuration', owner: 'DSL Call Center', sla: '—' }),
    sr2: SR('40008', 'Authentication Problem', { type: 'Fault For Connectivity', sub: 'Solved Cpe Reset And Configure', owner: 'DSL Call Center', sla: '—' }), s: [SAUTH], esc: 'If not solved: open the SR for L3-DSL Fixed Technical Consumer Support (24 hours).', end: true },
  au_tr: { t: 'TR069 problem', d: 'The Octopus log username is totally different from the Siebel username (another landline number). Check if it is a TR069 problem by checking the router simulation, then open the router page, remove the TR069 mark and configure the router offline. If solved, create the SR and close it with the proper Sub Area. If not solved, create the SR for the concerned team.', s: [SAUTH], sr: SR('40008', 'Authentication Problem', { type: 'Fault For Connectivity', owner: L3 }), end: true },
  au_isp: { t: 'Another ISP name in the log', d: 'The log contains another ISP (TE Data, Vodafone, Etisalat...). Ask the customer if the router is from Orange. If yes, reset the router and reconfigure it. If no, ask the customer to check his/her router software.', end: true },
  au_matched: { t: 'Usernames match but login failed', d: 'Call Assist hunt (08100) even if the customer has no Inner VLAN or Cabinet Code mismatch, to confirm there is no mismatch on Falcon either. Compare Octopus with the TE Portal (Cabinet Code and Inner VLAN).',
    c: [['Cabinet Code mismatch', 'au_cab'], ['Inner VLAN mismatch', 'au_vlan'], ['No account on Falcon', 'au_falcon'], ['No mismatch: customer still has a problem', 'au_ok']] },
  au_cab: { t: 'Cabinet Code mismatch', d: 'Compare the Cabinet Code in Octopus (Physical Connection) with MSAN_CODE in the FTTH Tool. Create the SR and call 08100 to fix it; the Assist member will close it.', sr: SR('40025', 'Mismatch Cabinet Code', { type: 'Fault For Connectivity', owner: 'Assist', sla: '—' }), end: true },
  au_vlan: { t: 'Inner VLAN mismatch', d: 'Compare the Interface in Octopus (Logical Connection) with the Outer/Inner VLAN from the FTTH Tool (Get Cross Connection). Call 08100 to fix it; the Assist member will close it.', sr: SR('40024', 'Mismatch Inner VLAN', { type: 'Fault For Connectivity', owner: 'Assist', sla: '—' }), end: true },
  au_falcon: { t: 'No account on Falcon', d: 'The customer has no account on Falcon after referring to the Assist team.', sr: SR('40027', 'Auth Prob no account on Falcon', { type: 'Fault For Connectivity', product: 'DSL-Active / Candidate Account, FTTH', sla: '24H' }), end: true },
  au_nolog: { t: 'No logs on Octopus', d: 'The line is physically up and not authenticated with no logs on Octopus. Check the TCP tool: does the cabinet have traffic?',
    c: [['Cabinet has no traffic', 'au_nolog_sr'], ['Cabinet has traffic normally: reset the port', 'au_ok']] },
  au_nolog_sr: { t: 'Cabinet has no traffic', d: 'Create the SR.', sr: SR('40031', 'Cabinet Has No Traffic', { product: 'DSL-Active / Candidate Account, FTTH', owner: L3, sla: '48 Hours' }), end: true },
  au_connect: { t: '"Connect Issue" on Octopus', d: 'The logical connection shows "Connect Issue". Open the router page and change the username to match the Siebel username. If solved, create the SR and close it with the proper Sub Area. If not solved, assign it to L3 (24 hours).',
    sr: SR('40008', 'Authentication Problem', { type: 'Fault For Connectivity', sub: 'Solved - Username configuration', owner: 'DSL CC', sla: '—' }), end: true },

  // ---------- NO BROWSING ----------
  nb_start: { t: 'No Browsing', d: 'The customer is authenticated with an IP and all router LEDs are fine, but he/she can not browse any website. Confirm the line is up, stable and authenticated; check the IP on the IP Tool, and redirection / QOS on PCRF. Ask the customer to open a browser and type 172.217.23.100, then check which page opens.',
    c: [['Redirected to Another ISP', 'nb_isp'], ['Redirected to Orange', 'nb_port']] },
  nb_isp: { t: 'Redirected to another ISP', d: 'Create the SR.', s: ['أنا واضح عندي يا فندم إن في مشكلة فنية على خط حضرتك. أنا هقدم لحضرتك شكوى وهيتم التواصل مع حضرتك خلال 48 ساعة.'],
    sr: SR('40016', 'TE-Redirection', { product: 'DSL-Active / Candidate Account, FTTH', owner: L3, sla: '48 Hours' }), end: true },
  nb_port: { t: 'Reset the port', d: 'Reset the port for Copper; Lock & Unlock for MSAN.', c: [['Customer can browse', 'nb_port_sr'], ["Customer can't browse", 'nb_restart']] },
  nb_port_sr: { t: 'Create and close the SR', d: 'Solved after the port reset.', sr: SR('40013', 'No Browsing', { sub: 'Solved-Port Reset', sla: '—', owner: '—' }), end: true },
  nb_restart: { t: 'Restart the router', d: 'Ask the customer to restart the router.', c: [['Customer can browse', 'nb_restart_sr'], ["Customer can't browse", 'nb_qos']] },
  nb_restart_sr: { t: 'Create and close the SR', d: 'Solved after the CPE restart.', sr: SR('40013', 'No Browsing', { sub: 'Solved CPE Restarted', sla: '—', owner: '—' }), end: true },
  nb_qos: { t: 'Check QOS and redirection', d: "Check the customer's QOS Profile on PCRF and that he/she is connected with an IP on the IP Tool.",
    c: [['QOS not found', 'nb_qosnf'], ['Redirection problem (redirection flag)', 'nb_redir'], ['QOS found', 'nb_type']] },
  nb_qosnf: { t: 'QOS not found', d: 'The package shows 0 KBs download/upload on PCRF. Create the SR.', s: [S24], sr: SR('37013', 'Quality Of Service', { type: 'DSL Fault For VAS', owner: L3 }), end: true },
  nb_redir: { t: 'Redirection problem', d: 'PCRF shows a redirection flag (for example REDIRECT_ACTIVATION). Open the SR that matches the redirection type.',
    tab: [['Code', 'Area', 'Owner (SLA 48 Hrs)'], ['3102', 'Redirection-Activation', 'DSL CH VAS (Active) / DSL Installation Team (Candidate)'], ['3104', 'Redirection-Suspension', 'DSL CH VAS (Active) / DSL Installation Team (Candidate)'], ['3100', 'Redirection-No Payment', 'DSL CH VAS (Active) / DSL Installation Team (Candidate)'], ['3103', 'Redirection-Cancellation', 'DSL CH VAS (Active) / DSL Installation Team (Candidate)'], ['3101', 'Redirection-Unknown', 'DSL Installation Team (Candidate)']], end: true },
  nb_type: { t: "Check the customer's connection type", d: 'On Siebel, check if the service is Dynamic IP, 1 Static IP, or 8 / 16 Static IPs. (The deck example follows the Dynamic path.) Then check how the customer is connected.',
    c: [['Dynamic', 'nb_dev'], ['1 Static IP', 'nb_dev'], ['8 or 16 Static IPs', 'nb_dev']] },
  nb_dev: { t: 'How is the customer connected?', d: 'The PC steps need a PC or laptop. If the customer only has a mobile, follow the mobile steps.', c: [['Connected using PC', 'nb_pc'], ['Connected using Mobile / tablet', 'nb_mob']] },
  nb_pc: { t: 'PC: check date, time and TCP/IP', d: 'If the customer gets the message "no internet secured", check the date & time on the PC. If solved, create and close the SR. If not, check IPs and Gateway in TCP/IP settings (Windows 98, Me, XP, Vista, 7, 8 & 10, MAC). Windows 7: Start → Control Panel → Network and Sharing Center → Change adapter settings → right-click Local Area Connection or Wireless Network Connection → Properties → double-click Internet Protocol Version 4 (TCP/IPv4) → choose "Use the following IP address", enter the IP, subnet mask, gateway and DNS, then OK.',
    c: [['Solved', 'nb_pc_sr'], ['Not Solved', 'nb_cpe']] },
  nb_pc_sr: { t: 'Create and close the SR', d: 'Solved after checking the PC / TCP/IP settings.', sr: SR('40013', 'No Browsing', { sub: 'Solved PC setting', owner: 'DSL Call Center', sla: '—' }), end: true },
  nb_cpe: { t: 'Reset and reconfigure the router', d: 'Reset and reconfigure the CPE. You can check the router simulation.', c: [['Customer can browse', 'nb_cpe_sr'], ["Customer can't browse", 'nb_open']] },
  nb_cpe_sr: { t: 'Create and close the SR', d: 'Solved after the router reset and configuration.', sr: SR('40013', 'No Browsing', { sub: 'Solved-CPE Reset And Configure', sla: '—', owner: '—' }), end: true },
  nb_open: { t: 'Open the No Browsing SR', d: 'Create the SR. Inform the customer to keep the router connected for the next 24 hours.', s: [SCALL], sr: SR('40013', 'No Browsing'), esc: ESC_NET },
  nb_mob: { t: 'Mobile: forget the network and reconnect', d: 'Customer has no browsing on a mobile and has no PC. Ask him/her to forget the network name and reconnect.', c: [['Solved', 'nb_mob_sr'], ['Not solved', 'nb_cpe']] },
  nb_mob_sr: { t: 'Create the SR', d: 'Solved after the mobile settings.', sr: SR('40013', 'No Browsing', { sub: 'Solved - Mobile Settings', sla: '—', owner: '—' }), end: true },

  // ---------- SLOW BROWSING ----------
  sb_start: { t: 'Slow Browsing', d: 'Check the customer quota consumption first and make sure he/she did not consume all the usage. Slow browsing could be a physical or a network issue. Before checking it, make sure the download rate is accepted (compare the speed test with the minimum accepted rate).', tab: RATES,
    c: [['Accepted rate', 'sb_phys'], ['Not accepted rate', 'sd_start']] },
  sb_phys: { t: 'Check the physical line parameters', d: 'Copper: Octopus. MSAN: FTTH Tool (Get Port Parameters).', link: { label: 'Not accepted: follow the Bad Line WF (Technical)', to: 'bl_start' }, c: [['Accepted', 'sb_browser']] },
  sb_browser: { t: 'Reset the customer browser', d: 'Steps depend on the browser: Tools menu → Options → Under the Hood → Clear browsing data → choose "the beginning of time", mark the needed boxes and clear. Then Under the Hood → Change proxy settings → Connections tab → make sure the Dial-up box is empty → LAN settings → clear all check boxes → OK. Check browsing again.', c: [['Solved', 'done'], ['Not solved', 'sb_mtu']] },
  sb_mtu: { t: 'Change the MTU', d: 'Change the MTU on the customer modem to 1420. If not solved, try 1300 or 1380 (extra mile, not mandatory). Check the browsing speed again.', c: [['Solved', 'done'], ['Not solved', 'sb_sr']] },
  sb_sr: { t: 'Open the Slow Browsing SR', d: 'If the customer uses a smartphone, inform him/her to prepare a device connected by cable or Wi-Fi for the follow-up call. Inform the customer to keep the CPE connected for the next 24 hours.', s: [S24, SURGENT], sr: SR('40020', 'Slow Browsing', { sub: 'Empty', owner: NET }) },

  // ---------- BROWSING SITES ----------
  bs_start: { t: 'Browsing Sites Problem', d: 'The customer can use the Internet normally except one or more specific websites. The customer should have a PC or laptop to follow this handling. If he/she only has a mobile, make sure the customer is connected (authenticated, has an IP) and that the date & time are updated, then create and close the SR.',
    c: [['Customer has a PC / laptop', 'bs_other'], ['Mobile only', 'bs_mob']] },
  bs_mob: { t: 'Mobile only: create and close the SR', d: 'Authenticated, has an IP and the date & time are right.', sr: SR('40009', 'Browsing Sites Problem', { sub: 'Not Solved Customer Side Issue', owner: 'DSL Call Center', sla: '—' }), end: true },
  bs_other: { t: 'Can he/she browse other websites?', d: 'If the customer can browse other websites, ask if he/she installed a firewall / ISA server. If yes, ask the customer to connect back to back and make sure the PC default gateway is the router IP (not the ISA server IP). If no, reset the browser settings to default and let the customer try to open the website.',
    c: [['Can browse this site', 'done'], ["Can't browse this site", 'bs_dns']] },
  bs_dns: { t: 'Check date, time and DNS', d: 'Check the date and time on the PC. Check DNS in the TCP/IP settings: Preferred DNS 41.128.225.225, Alternate DNS 41.128.225.226. Let the customer try to open the website.', c: [['Can browse this site', 'done'], ["Can't browse this site", 'bs_mtu']] },
  bs_mtu: { t: 'Famous sites and MTU', d: 'Ask the customer to open famous sites such as www.hotmail.com or www.msn.com. Change the MTU to 1420 and try again.', c: [['Solved', 'done'], ['Not solved', 'bs_sr']] },
  bs_sr: { t: 'Tracert and open the SR', d: 'Get a tracert from the customer side (type tracert and the website name in cmd, then Enter). Attach the image to the ticket and open the case to Consumer Support with the source "Browsing sites Problem–K".', s: [SCALL], sr: SR('40009', 'Browsing Sites Problem', { owner: L3, sla: '24 Hrs' }), esc: ESC_L3 },

  // ---------- SLOW DOWNLOAD ----------
  sd_start: { t: 'Slow Download', d: "Check the customer's quota consumption through Siebel PCRF: is the package fully consumed?", c: [['Quota fully consumed', 'sd_quota'], ['Not fully consumed', 'sd_qos']] },
  sd_quota: { t: 'Quota fully consumed', d: 'Offer upgrading the package or adding an extension, then create and close the SR.', s: ['حضرتك استخدمت الباقة بالكامل وميعاد تجديدها كل شهر يوم .... ممكن تشحن باقة إضافية أو تعلّي الباقة لاستعادة السرعة الطبيعية، وتقدر تتابع استهلاكك من خلال موقعنا Dsl.orange.eg أو تطبيق My Orange.'],
    sr: SR('40014', 'Slow Download', { type: 'DSL Fault For Connectivity', sub: 'Solved Speed Downgraded', sla: '—', owner: '—' }), end: true },
  sd_qos: { t: 'Check the QOS profile', d: 'Check the QOS profile of the customer.', c: [['Right QOS', 'sd_phys'], ['Wrong QOS', 'sd_wqos']] },
  sd_wqos: { t: 'Wrong QOS: reset the port', d: 'Copper: Port Reset. MSAN: Lock and Unlock port.', c: [['Solved', 'done'], ['Not Solved', 'sd_qos_sr']] },
  sd_qos_sr: { t: 'Open the QOS SR', d: 'Ask the customer to keep the router switched on and connected.', s: [S24.replace('الـ 24 ساعة', 'الـ48 ساعة').replace('بعد 24 ساعة', 'بعد 48 ساعة')], sr: SR('37013', 'Quality Of Service', { type: 'Fault For VAS', owner: L3, sla: '48 Hrs' }) },
  sd_phys: { t: 'Check the physical line parameters and bit rate', d: 'Copper: Octopus. MSAN: FTTH Tool. Bit rate mismatch check: Relative Occupation (Current Rate / Max Attainable Rate) should be less than 85%. Example 1: 16384 / 20480 = 80%, no mismatch. Example 2: 10240 / 20480 = 50%, has bit rate mismatch.', c: [['Has Bit Rate Mismatch', 'sd_br'], ["Doesn't have Bit Rate Mismatch", 'sd_cong']] },
  sd_br: { t: 'Bit rate mismatch: reset the port', d: 'Copper: Port Reset then Update. MSAN: Lock then Unlock the port.', c: [['Solved', 'done'], ['Not Solved', 'sd_br_sr']] },
  sd_br_sr: { t: 'Bit rate mismatch SRs', d: 'Copper lines: create the first SR. MSAN up to 30 Mbps: adjust the profile speed through the TE Portal and create & close the second SR. MSAN up to 70, 100, 200 Mbps: create the second SR for L3 (Home Internet 400, 540, 675, 950, 1350, 800 (up to 70 Mbps), 1200; 24 Hrs).',
    s: ['تمام يا أستاذ/ة...... أنا سجلت طلب حضرتك وبستأذنك نسيب الراوتر متوصل وفي خلال الـ 24 ساعة اللي جاية في حد شيتواصل مع حضرتك من جانبنا لحل المشكلة.'],
    sr: SR('40010', 'Bit Rate MisMatch Copper', { type: 'Fault For Connectivity', owner: L3 }), sr2: SR('40026', 'Bit Rate MisMatch MSAN', { type: 'Fault For Connectivity', sub: 'Solved', sla: '—', owner: 'L3 (70/100/200 Mbps)' }) },
  sd_cong: { t: 'Congested POP or MSAN cabinet?', d: 'Check Octopus to find out if the customer has a congested POP or MSAN cabinet. This step is for Copper only; if the line is MSAN, select "Not congested".', c: [['Congested', 'sd_cong_sr'], ['Not congested', 'sd_speed']] },
  sd_cong_sr: { t: 'Congested: create the SR', d: 'Tell the customer there are updates in his/her exchange and no exact time yet.', s: ['السنترال بتاع حضرتك فيه تحديثات يا فندم، إحنا لسه معندناش وقت معين، بس حابين حضرتك تعرف إننا بنشتغل بأقصى سرعة عشان نقدم لحضرتك أحسن خدمة، وحضرتك ممكن تتابع معانا في أي وقت لحد ما تخلص المشكلة على 16333.'], sr: SR('40014', 'Slow Download', { type: 'Fault For Connectivity', sub: 'Not Solved-Congested POP', sla: '—', owner: '—' }), end: true },
  sd_speed: { t: 'Speed test', d: 'For gaming consoles follow the Online Gaming handling. For computers and mobiles: open www.speedtest.net, connect by LAN if possible, otherwise by Wi-Fi with one device only (disconnect the others), and compare the result with the minimum accepted download speed (MSAN: 65% of the profile, Copper: 45%). On mobile, install the Speedtest app and press GO. Windows 10: disable Windows Update before troubleshooting.', tab: RATES,
    link: { label: 'Gaming console: Online Gaming WF', to: 'og_start' }, c: [['Accepted rate', 'done'], ['Not accepted rate', 'sd_mtu']] },
  sd_mtu: { t: 'Change the MTU', d: 'Change the MTU on the customer router to 1420. If not solved, try 1300 or 1380 (extra mile). Check the download again.', c: [['Accepted', 'done'], ['Not Accepted', 'sd_link']] },
  sd_link: { t: 'Ethernet or WLAN?', d: 'Check if the customer is connected using Ethernet or WLAN.', c: [['Ethernet', 'sd_eth_sr'], ['WLAN (Wi-Fi)', 'sd_wifi']] },
  sd_wifi: { t: 'Wi-Fi: change channel and password', d: 'From the wireless section in the router interface, look for the channel. If it is Auto, set it to manual and choose Channel 1, 6 or 11 (if the customer already uses one of them, choose another of the three). If the customer is connected to only 1 device through TR069, there is no need to change the Wi-Fi password. Then check the download again. If solved, create and close the SR.', c: [['Accepted', 'done'], ['Not accepted', 'sd_eth_sr']] },
  sd_eth_sr: { t: 'Open the Slow Download SR', d: 'Ask the customer to keep the router switched on and connected.', s: ['أنا سجلت طلب حضرتك وهيتم المتابعة من الدعم الفني في خلال 24 ساعة وأستأذنك تسيب الراوتر شغال.'], sr: SR('40014', 'Slow Download', { owner: NET }), esc: ESC_NET },

  // ---------- SLOW UPLOAD ----------
  su_start: { t: 'Slow Upload', d: 'Check the quota first. Check the physical line parameters: Octopus for Copper, FTTH Tool for MSAN (check the Maximum Attainable Rate Upstream). Compare the Bit Rate with the Max Attainable Rate; the Bit Rate should be 65% of it.', c: [['Has Bit Rate Mismatch', 'su_br'], ["Doesn't have Bit Rate Mismatch", 'su_pkg']] },
  su_br: { t: 'Reset the port', d: 'Copper: Port Reset then Update. MSAN: Lock then Unlock port (or change profile speed).', c: [['Solved', 'done'], ['Not solved', 'su_sr']] },
  su_sr: { t: 'Open the Slow Upload SR', d: 'Clarify in the SR note that the customer has a bit rate mismatch regarding the upload speed.', s: [SAUTH, SPORT], sr: SR('39003', 'Slow Upload', { type: 'DSL Fault For Physical', sub: 'Solved Port Reset', owner: 'Data Tech Con Support-Physical', sla: '48 Whrs' }) },
  su_pkg: { t: 'Check the package and the accepted upload rate', d: "Check the customer's package and calculate the accepted upload rate, which should be 65% of the current rate. If a customer on an Up to 30 package complains that upload is 1 Mbps instead of 3 Mbps, use the scripts below (VDSL port with ADSL router: upsell a high-end router; ADSL port: this is the maximum the port can handle).",
    s: ['في حالة إن العميل عنده VDSL Port بـ ADSL راوتر: حضرتك تقدر تشتري راوتر السرعات الفائقة واللي هيوفر لحضرتك سرعة ابلود وتحميل أعلى من الموجودة على خطك حاليا، تحب أوضحلك تفاصيل عن الراوتر وسعره؟', 'في حالة إن العميل عنده ADSL port: للأسف يا فندم سرعة التحميل الموجودة على خطك دي أقصى سرعة للبورت الخاص بحضرتك يقدر يتحملها.'], end: true },

  // ---------- ONLINE GAMING ----------
  og_start: { t: 'Online Gaming: ping and lag', d: 'Ping is the delay between the player input and the server response, measured in ms. Lag is a spike in that time. A lower ping is better. The customer says: "the ping is high", "the game cuts" or "there is lag".',
    tab: [['Ping', 'Meaning'], ['15 ms or less', 'Excellent'], ['15 to 45 ms', 'Great'], ['45 to 100 ms', 'Somewhat acceptable'], ['100 to 250 ms', 'Barely playable'], ['More than 250 ms', 'Often unplayable']], c: [['Start: check the line physically', 'og_phys']] },
  og_phys: { t: 'Check the line physically', d: 'Physical parameters should be accepted. MSAN line max bitrate should not be less than 40 Mbps. Port and router types should be VDSL. Noise should not be less than 100.', c: [['Any parameter not accepted', 'og_bad'], ['All accepted', 'og_mtu']] },
  og_bad: { t: 'Parameters not accepted', d: 'Follow the Bad Line WF and add "Online Gaming" in the SR note.', link: { label: 'Open the Bad Line WF (Technical)', to: 'bl_start' }, end: true },
  og_mtu: { t: 'Speed test, then change the MTU', d: 'Ask the customer to make a speed test. Change the MTU on the customer router to 1420. If not solved, try 1300 or 1380 as an extra mile (not mandatory).', c: [['Solved', 'og_sr_ok'], ['Not solved: check the download again', 'og_link']] },
  og_link: { t: 'Ethernet or WLAN?', d: 'Check the download again. If not solved, check if the customer is connected using Ethernet or WLAN.', c: [['Solved', 'og_sr_ok'], ['Ethernet', 'og_sr'], ['WLAN (Wi-Fi)', 'og_wifi']] },
  og_wifi: { t: 'Wi-Fi: change channel and password', d: 'Change the Wi-Fi channel and password.', c: [['Solved', 'og_sr_ok'], ['Not solved', 'og_sr']] },
  og_sr_ok: { t: 'Create and close the SR', d: 'Create and close the SR with the relevant Sub Area: CC-Solved MTU 1420, CC-Solved MTU 1300, CC-Solved MTU 1380, CC-Solved Wi-Fi Channel, or CC-Solved Wi-Fi Password.', sr: SR('40032', 'Online Gaming Support', { sub: 'CC-Solved MTU 1420 / 1300 / 1380 / Wi-Fi Channel / Wi-Fi Password', product: 'ADSL / FTTH', owner: 'Call Center', sla: '—' }), end: true },
  og_sr: { t: 'Open the Online Gaming SR', d: 'The customer will be contacted within 2 hours and the resolution SLA is 24 hours. If the customer has a VDSL port and an ADSL router, handle with best efforts and upsell the VDSL high-end router. Copper lines are handled with best efforts, results are not guaranteed.',
    s: ['أنا قدمت طلب يا فندم وهيتم التواصل مع حضرتك خلال ساعتين عمل.', 'حابب أأكد لحضرتك يا فندم إنك لو اشتريت راوتر High End VDSL هيحسن الخدمة مع حضرتك بشكل ملحوظ وهيقلل البينج. الراوتر حاليا عليه عرض 50% خصم لعملاء أورنج يعني سعره 855 جنيه شامل الضريبة. أوضح لحضرتك أقرب فرع ومواعيد عمله؟', 'حابب أأكد لحضرتك يا فندم إن الخط كفاءته مش هتكون بالشكل المطلوب عشان الأسلاك نحاس، ودة مش بيضمن أحسن خدمة وسرعة للإنترنت.', 'لو حضرتك بتواجه تقطيع في اللعبة أو بطء أو البينج عالي، إحنا في خدمة حضرتك 24 ساعة طوال أيام الأسبوع، شرفنا أي وقت هنعمل بعض الخطوات لحل المشكلة.'],
    sr: SR('40032', 'Online Gaming Support', { sub: '--', product: 'ADSL / FTTH', owner: NET, sla: '24 Hours' }) },

  // ---------- CONNECTION / WI-FI UNSTABLE ----------
  cu_start: { t: 'Connection Unstable', d: 'The physical up time does not match the logical up time on the FTTH Tool and the IP Tool.', c: [['Connection Unstable', 'cu_check'], ['Wi-Fi Instability', 'wf_start']] },
  cu_check: { t: 'Compare Port Up Time with the IP login', d: 'Open the FTTH Tool and check the Port Up Time (Get Port Up Time). Open the IP Tool and check the login date (Logdate). If they do not match (more than 5 minutes between the Port Up Time and the IP login), open the SR. The agent should NOT do a port reset or restart the router.', sr: SR('40012', 'Connection Unstable', { owner: L3, sla: '24 Hours' }), end: true },
  wf_start: { t: 'Wi-Fi Instability', d: 'The customer complains of Wi-Fi instability only, while the line is physically and logically stable. Change the Wi-Fi SSID to a new name that was not used before. Change the Wi-Fi channel from the router interface: if it is Auto, set it to manual and choose Channel 1, 6 or 11.', c: [['Solved', 'wf_ok'], ['Not solved', 'wf_sr']] },
  wf_ok: { t: 'Create and close the SR', d: 'The problem is solved after changing the channel.', sr: SR('40033', 'WiFi Instability', { sub: 'Solved-Channel Changed', owner: '—', sla: '—' }), end: true },
  wf_sr: { t: 'Open the Wi-Fi Instability SR', d: 'The SR is assigned to the 2nd line (Technical Network Team) to solve the issue.', sr: SR('40033', 'WiFi Instability', { owner: NET, sla: '24 Hours' }) },
};
