## Linux: Overview and Installation - LinkedIn course by Grant McWilliams - takeaways

[Link to course on LinkedIn](https://www.linkedin.com/learning-login/share?account=2113185&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Flinux-system-information-and-directory-structure-tools%3Ftrk%3Dshare_ent_url%26shareId%3DQLk5ywWaTeKx3wDtBhBk1Q%253D%253D)

##### Commands

command [options] \<arguments\>
ls --size /home

[explainshell - site with explaining of commands](https://explainshell.com/)

##### Help and manual about command

command --help
help command
man comman

pwd - print working directory
ls --color=auto - coloring output of ls
locate name - search files containing name
locate \_a name1 name2 - search files that contains both of word
sudo find / -name _name1_ - search files containing name

aliases are created in \*.bashrc

tree - visual representation of directory, need to be installed

##### Directories

/ - root directory
/bin - essential command binaries
/boot - bool loader files including kernels
/dev - essential device files
/etc - system configuration files
/home - users' home directories
/lib - 32-bit system libraries
/lib64 - 64-bit system libraries
/media - mount point for removable media
/mnt - temporarily mounted filesystems
/opt - optional application software packages
/proc - virtual filesystem providing process and kernel info as files
/root - home directory for the root user
/run - run-time configuration data
/sbin - essential system binaries
/srv - site-specifc data served by this system
/sys - contains information about the devices connected to the computer
/tmp - temporary files
/usr - read-only user data; contains the majority of utilities and applications
/var - variable files whose content is expected to change during normal operation
