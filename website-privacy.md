# Campus Köthen website privacy notice

Last updated: 2 October 2026

This notice applies when you visit [campus-koethen.sturahsa.de](/en/), including its German version. The mobile app has a separate [app privacy notice](/en/legal/#privacy). The web view of the News Feed and other linked services have their own privacy notices.

## Controller and privacy contact

Student body of Hochschule Anhalt  
Public-law corporation  
represented by the spokespersons' council of the student council  
Bernburger Straße 55  
06366 Köthen  
Germany

Email: [stura@hs-anhalt.de](mailto:stura@hs-anhalt.de). You can send privacy enquiries about this website to this address.

## Website access and logs

When you access the website, technically necessary connection data are processed. They include in particular your IP address, the time and requested address, and customary HTTP connection information. These data are needed to deliver the requested pages and keep the service secure. The legal basis is Article 6(1)(e) GDPR in conjunction with section 65 of the Higher Education Act of Saxony-Anhalt (HSG LSA).

The project configuration disables access logs in the Nginx container, directs its error log to `/dev/null`, and uses Docker's `none` logging driver for this container. Whether that exact configuration is running on the server has not been verified. The operator has confirmed global settings that disable access and error logs in the host's reverse-proxy Nginx. Individual server or location blocks may override them. Until the effective configuration for this website has been checked, stored access or error logs there cannot be ruled out; their actual retention period is unknown. The website itself creates no usage statistics or user profiles.

Separate system and security logs are generated on the shared server, notably by systemd-journald, rsyslog and Fail2ban. Technical faults, login attempts or security events may cause them to contain IP addresses, timestamps, possibly user identifiers, and details of the event or protective measure. This does not mean that every visit to the website is logged. This processing supports secure operation, fault diagnosis and protection against unauthorised access. Its legal basis is also Article 6(1)(e) GDPR in conjunction with section 65 HSG LSA. The security measures also support compliance with Article 32 GDPR.

According to the operator-confirmed journald settings and daily rotation of rsyslog and Fail2ban files, these local system and security logs are normally retained for approximately 15 days. This is not a general deletion period for every file or service on the server. In particular, it does not apply without further checks to possible host-Nginx logs, other system services or the hosting provider's own logs. The period for possible copies of these local entries in backups is described below.

## Hosting and backups

The website is hosted on a shared virtual server in Germany by Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Cyprus. Hostinger processes hosting data on the student body's behalf under an agreement pursuant to Article 28 GDPR. The [data processing addendum](https://www.hostinger.com/legal/dpa) addresses sub-processors and possible international transfers, including EU Standard Contractual Clauses as a safeguard where required. A server location in Germany does not mean all processing takes place there.

According to the operator, Hostinger creates a weekly automatic server backup on servers within the European Union and retains two versions; the oldest is deleted when the next backup is made. A copy of one of the local system or security log entries described above may therefore normally remain in a backup for up to approximately 29 days after its creation: about 15 days of local retention plus up to 14 days of backup retention. This estimate applies only to those entries. Whether Hostinger keeps its own logs or applies different backup rules to other data is unknown; 29 days is not a general deletion period for backup contents.

## Contact by email

If you use the listed email address, the student body processes your email address, message and any other information you provide to handle your enquiry. The legal basis is Article 6(1)(e) GDPR in conjunction with section 65 HSG LSA. Providing this information is voluntary; without information needed to handle the enquiry, a reply may not be possible. General enquiries about this website and the related replies are retained until the enquiry has been dealt with and for no more than six months afterwards, so that follow-up questions about the same matter can be answered. They are then deleted. If a specific enquiry is subject to a statutory retention duty or is needed to establish, exercise or defend specific legal claims, only the information required for that purpose is kept longer and deleted once that reason no longer applies. Other matters concerning the student body may be subject to different retention periods.

## Cookies, local resources and external links

The website sets no cookies and uses neither Local Storage nor Session Storage. It uses no analytics, advertising or tracking services, external embeds, forms or user accounts of its own. Fonts, images, stylesheets and scripts are loaded from our own server; ordinary browser caching remains possible. The language follows the page address and is not stored as a preference.

Links to Google Play, the App Store, the web view of the News Feed, GitHub and other external services are opened only when you select them. Their respective privacy notices govern subsequent processing.

## Your rights and right to complain

Subject to the GDPR's conditions, you have rights including access, rectification, erasure and restriction of processing, and, where applicable, data portability. You may object to processing based on Article 6(1)(e) GDPR for reasons relating to your particular situation under Article 21 GDPR. There is no automated decision-making, including profiling. Contact the privacy address above to exercise your rights.

Under Article 77 GDPR, you may complain to a data protection supervisory authority, in particular the Saxony-Anhalt Commissioner for Data Protection, Otto-von-Guericke-Straße 34a, 39104 Magdeburg, Germany, email: [poststelle@lfd.sachsen-anhalt.de](mailto:poststelle@lfd.sachsen-anhalt.de). Further details appear on the [official contact page](https://datenschutz.sachsen-anhalt.de/landesbeauftragte/kontakt).
