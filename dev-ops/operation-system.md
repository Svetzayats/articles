## OS, types and features

> This is takeaways from 2 articles, to be continued...

An **Operating System (OS)** is a software that acts as an interface between computer hardware components and the user. The OS helps you to communicate with the computer without knowing how to speak the computer’s language.

Major components of an OS are **file system, scheduler, and device driver**.

**IPC** - interprocess communications.

There are 3 key elements of an operating system, which are:

- **Abstractions** (process, thread, file, socket, memory),
- **Mechanisms** (create, schedule, open, write, allocate),
- **Policies** (LRU, EDF)

There are 2 operating **system design principles**, which are:

- **Separation** of mechanism and policy by implementing flexible mechanisms to support policies
- **Optimize** for common case: Where will the OS be used? What will the user want to execute on that machine? What are the workload requirements?

### Types of OS

Following are the popular types of OS (Operating System):

- Batch Operating System - to speed length and time-consuming processes, job with a similar type of needs are batched together and run as a group. User prepares job on an offline device and submit it to the computer operator.
- Multitasking/Time Sharing OS - processor time (CPU) is shared among multiple users
- Multiprocessing OS
- Real Time OS - quickly responds, examples: Military Software Systems, Space Software Systems.
- Distributed OS - use many processors located in different machines.
- Network OS - runs on a server.
- Mobile OS - most famous Android and iOS.

Or:

- Monolithic OS - entire OS is working in kernel space
- Modular OS - some part of the system core will be located in independent files called modules, can be added at run time
- Micro OS - kernel is broken down into separate processes, known as servers, some of the servers run in kernel space and some run in user-space

### Main functions of OS

- Memory Management
- Processor Management
- File Management
- Device Management
- I/O Management
- Secondary Storage Management
- Security
- Command Interpretation
- Networking
- Communication Management
- Job Accounting

### Features of OS

- Protected and supervisor mode
- Allows disk access and file systems Device drivers Networking Security
- Program Execution
- Memory management Virtual Memory Multitasking
- Handling I/O operations
- Manipulation of the file system
- Error Detection and handling
- Resource allocation
- Information and Resource Protection

### What is kernel in OS?

The kernel is the central component of a computer operating systems. The only job performed by the kernel is to the manage the communication between the software and the hardware. While the Kernel is the innermost part of an operating system, a shell is the outermost one.
**Types of kernel**: monolithic and microkernels.

### Processes and Process Management

A process is basically a program in execution.

When a program is loaded into the memory and it becomes a process, it can be divided into four sections ─ stack (contains the temporary data such as method/function parameters, return address and local variables), heap (dynamically allocated memory to a process during its run time), text (current activity represented by the value of Program Counter and the contents of the processor’s registers) and data (global and static variables).

States of process execution: start, ready, running, wait, terminated / exit.

### Threads and Concurrency

A thread is a flow of execution through the process code. A thread is also called a lightweight process. Threads provide a way to improve application performance through parallelism.

Each thread belongs to exactly one process and no thread can exist outside a process.

There are User Level Threads and Kernel Level Threads.

### Scheduling

Activity of the process manager that handles the removal of the running process from the CPU and the selection of another process on the basis of a particular strategy.

Context switch - mechanism to store and restore the state or context of a CPU in Process Control block.

### Memory Management

Handles or manages primary memory and moves processes back and forth between main memory and disk during execution.

The process address space is the set of logical addresses that a process references in its code.
The set of all logical addresses generated by a program is referred to as a logical address space. The set of all physical addresses corresponding to these logical addresses is referred to as a physical address space.

### Inter-Process Communication (IPC)

A process can be of 2 types: Independent process and Co-operating process. Processes can communicate with each other using these two ways: Shared Memory and Message Parsing.

### I/O Management

Managing various I/O devices including mouse, keyboards, touch pad, disk drives, display adapters, USB devices, Bit-mapped screen, LED, Analog-to-digital converter, On/off switch, network connections, audio I/O, printers etc.

### Virtualization

Technology that allows you to create multiple simulated environments or dedicated resources from a single, physical hardware system.
Hypervisor.
Virtual machines.
Physical machine with hypervisor is called the host. VMs are called guests.

### Distributed File Systems

A distributed file system is a client/server-based application that allows clients to access and process data stored on the server as if it were on their own computer.

### Distributed Shared Memory

Distributed Shared Memory (DSM) is a resource management component of a distributed operating system that implements the shared memory model in distributed systems, which have no physically shared memory. The shared memory provides a virtual address space that is shared among all computers in a distributed system.

### Cloud Computing

Cloud computing is a kind of outsourcing of computer programs.

### Useful links

[What is Operating System? Explain Types of OS, Features and Examples on guru99.com](https://www.guru99.com/operating-system-tutorial.html)
[The 10 Operating System Concepts Software Developers Need to Remember from James Le, 2017](https://data-notes.co/the-10-operating-system-concepts-software-developers-need-to-remember-480d0734d710)
