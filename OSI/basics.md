OSI model is a conceptual framework that is used to describe how a network functions.
Helps standardize how computer systems send information to each other.

### Terms

**node** is a physical electronic device hooked up to a network, for example a computer, printer, router, and so on

**host** as a type of node that requires an IP address. All hosts are nodes, but not all nodes are hosts

**Links** connect nodes on a network. Links can be wired, like Ethernet, or cable-free, like WiFi.

**protocol** is a mutually agreed upon set of rules that allows two nodes on a network to exchange data.

**network** is a general term for a group of computers, printers, or any other device that wants to share data.

**Topology** describes how nodes and links fit together in a network configuration, often depicted in a diagram.

### Layers

Physical Layer | Please
Data Link Layer | Do
Network Layer | Not
Transport Layer | Tell (the)
Session Layer | Secret
Presentation Layer | Password (to)
Application Layer | Anyone

### Physical Layer

data unit - bit
Layer 1 contains the infrastructure that makes communication on networks possible.

### Data Link Layer

data unit - frame (header, body and frame trailer)
Sub-layers: Media Access Control (MAC) and Logical Link Control (LLC)
The Data Link Layer allows nodes to communicate with each other within a local area network. The foundations of line discipline, flow control, and error control are established in this layer.

### Network Layer

data unit - data packer (typically: frame + ip address information wrapper)
IP addresses are associated with the physical node’s MAC address via the Address Resolution Protocol (ARP), which resolves MAC addresses with the node’s corresponding IP address.
The Network Layer allows nodes to connect to the Internet and send information across different networks.

### Transport Layer

For TCP, the data unit is a packet. For UDP, a packet is referred to as a datagram.

**Transmission Control Protocol (TCP)**
TCP, a connection-oriented protocol, prioritizes data quality over speed.

TCP explicitly establishes a connection with the destination node and requires a handshake between the source and destination nodes when data is transmitted. The handshake confirms that data was received. If the destination node does not receive all of the data, TCP will ask for a retry.

TCP also ensures that packets are delivered or reassembled in the correct order.

**User Datagram Protocol (UDP)**
UDP, a connectionless protocol, prioritizes speed over data quality. UDP does not require a handshake, which is why it’s called connectionless.

Because UDP doesn’t have to wait for this acknowledgement, it can send data at a faster rate, but not all of the data may be successfully transmitted and we’d never know.

The Transport Layer provides end-to-end transmission of a message by segmenting a message into multiple data packets; the layer supports connection-oriented and connectionless communication.

### Session Layer

session is a mutually agreed upon connection that is established between two network applications (not two nodes)
Examples of protocols on Layer 5 include Network Basic Input Output System (NetBIOS) and Remote Procedure Call Protocol (RPC), and many others.

The Session Layer initiates, maintains, and terminates connections between two end-user applications. It responds to requests from the presentation layer and issues requests to the transport layer.

### Presentation Layer

3 data formatting methods to be aware of:
American Standard Code for Information Interchange (ASCII)
Extended Binary-Coded Decimal Interchange Code (EBDCIC)
Unicode

This layer is responsible for data formatting, such as character encoding and conversions, and data encryption.

### Application Layer

Protocols that operate on this level include File Transfer Protocol (FTP), Secure Shell (SSH), Simple Mail Transfer Protocol (SMTP), Internet Message Access Protocol (IMAP), Domain Name Service (DNS), and Hypertext Transfer Protocol (HTTP).

## Useful links

#### Articles

[The OSI Model – The 7 Layers of Networking Explained in Plain English](https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/)

#### Video

https://youtu.be/Ilk7UXzV_Qc - good description of 7 layers (~ 8 min)
https://youtu.be/PVOuff-p420 - linux network troubleshooting
https://youtu.be/7XUibDYw4mc - curl
