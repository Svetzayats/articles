## Linux: Overview and Installation - LinkedIn course by Grant McWilliams - takeaways

[Link to course on LinkedIn](https://www.linkedin.com/learning-login/share?account=2113185&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Flinux-overview-and-installation-13912059%3Ftrk%3Dshare_ent_url%26shareId%3DGuG9S6zhS3GX6vk4EOJuuA%253D%253D)

**Enterprise Linux - Red Hat-Based Distributions**

- Red Hat Enterprise
- CentOS Enterprise Linux
- Rocky Linux
- AlmaLinux OS
- Fedora Linux

### Useful resources

distrowatch.com - different distributions
virtualbox.org - virtual machine
gnome-look.org - themes (download; unzip; home - create .themes folder - puth there theme)
extensions.gnome.org - system-monitor, for example

### What to install

Gnome Tweaks - gives you addition to customize system

### Virtual machine

Virtualiztion - the creation of virtual versions of something, specifically computer hardware, storage devices and network resources.

##### Virtual machine on Windows

1. Download VirtualBox for windows from https://virtualbox.org/
2. Install it.
3. VirtualBox Extension Pack https://virtualbox.org/ (lower on download page) (not exe file)
4. Run and install (in Tools - Plugins we can check that there is VirtualBox Extension Pack)

##### Optimization settings

Create VM - but not add ISO: if you add ISO for installing you will be not able to manage settings of your VM and it's optimization.

- Processor - set half of available CPU, Enable PAE/NX, Acceleration - Hyper-V (for windows) | KVM (for linux)
- Display - Video memory on maximum, Enable #D Acceleration.
- General - you can enable Disk Encryption.

##### Shortcuts

Right CTRL + T - create snapshot

### Useful terminal commands on Ubuntu

sudo apt upgrade - update system
apt list --installed - list of installed packages
apt-cache search . - command for list for all available packages
apt-cache search keyword - command for searching packages by keyword
sudo dpkg -i package_file\* - install deb package
clear - clear console
