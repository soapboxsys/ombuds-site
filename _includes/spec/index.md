Ombuds Technical Specification
==============================
Ombuds ensures a person's words are neither forgotten nor modified.
This document defines and specifies the implementation of [our paper](/research/).

Protocol Definitions
--------------------
[Public Record](public-record) DD01
:   A single, consistent database of all public bulletins and public endorsements. Derived from a block chain, a public record is an immutable, append only data set.

[Author](author) DD02
:   The Base58Check encoded address of the public key that signed a record.

[Bulletin](bulletin) DD03
:   The common format for statements stored within the public record.

[Endorsement](endorsement) DD04
:   A record signalling one's approval of some bulletin.

[Record Encoding Formats](encode-formats) DD05
:   The accepted formats for encoding a record within a Bitcoin transaction.

System Design
-------------

[Mobile Architecture](mobile-arch) DD06
:   The design of the planned Android app written by [Soapbox Systems](http://soapbox.systems).

[Web Relay API Design](web-relay-api) DD07
:   The design of the HTTP api that Web and mobile clients consume.

Future Work
-----------

[Publicly Auditable API](audit-api-exten) DD08
:   A draft of an extension for the web relay API that lets clients audit the servers they rely on.


Meta
----

[How this Spec is Versioned](versions) DD00
:   Each document in this specification is governed by a review process.

[Test Data](test-data) DD09
:   An assortment of hand crafted test cases of valid and invalid records.
