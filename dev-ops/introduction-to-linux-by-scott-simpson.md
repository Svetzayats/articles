## Introduction to Linux - LinkedIn course by Scott Simpson - takeaways

[Link to course on LinkedIn](https://www.linkedin.com/learning-login/share?account=2113185&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fintroduction-to-linux%3Ftrk%3Dshare_ent_url%26shareId%3DLvDZ6u50RYyOtgMYbHS1pg%253D%253D)

### The kernel

The Linux kernel is an open source program, first released by Linus Torvalds in 1991.
A kernel is software that communicates with computer hardware, required to run software on computer.

Computer Hardware (CPU, Memory...)
⬇
Linux Kernel
⬇
User Space

A Linux system - requires a linux kernel; uses additional software to control the system's boot process and manage running programs.

Standard tools - in the box.
GNU coreutils // BusyBox

### The File System

FHS - Filesystem Hierarchy Standard.

The top level of the file system is called the root and is represented by /.
bin, sbin adn usr - different types of programs
home - user files
media, mnt - mounting / attaching files
etc - configuration files
var - changeable system information (system logs)
dev, proc, sys - created by Kernel, for hardware

### User and system security

Standard users - can't access the files that belong to other users unless specifically granted permission to do so.
Superuser (root) - can access any file on the system (and make system-wide changes).

Standard users can use root's privileges if they're empowered to do so with su or sudo.

Single-user mode - for troubleshooting purposes. User is root.

Difference - permissions. Permissions represent what rights a user has to a given file. Numeric format (755) or sumbolyc (rwx r-x r-x). First for user, second for group, third for others.

chmod, chown, chgrp - commands for permission.

SELinux or AppArmor - additional levels of security in Linux systems.
