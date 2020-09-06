---
layout: post
title: "Port Primordia to Mac and Linux"
date: 2020-09-05
description: "Port Primordia or any other Adventure Game Studio games to macOS Catalina and Linux."
---

I didn't figure out how to run the Primordia game when I first played it, a GOG support staff told me how to load the game with Wineskin and that was before the game language update and one week before macOS dropped support of 32-bit apps. Now I can neither play the updated game nor the old one because only Windows installer get updated and the latest Wineskin was released in 2012, err.

Luckily, I found that I can build the game and run it without Wine. Primordia is based on Adventure Game Studio(AGS), which is an open source cross-platform game engine. Maybe the publisher \*bleep\* up, this game should be working on Linux and macOS. What we need to do is extracting game files from the Windows installer and building a 64-bit app, kind like a ScummVM game.

## Extract game files

GOG uses Inno Setup to pack their Windows installers, which is also open sourced. There are some nice people build a tool called innoextract to unpack them. You can install it with Homebrew.

## Build engine

Rename file `Primordia.exe` to `game.ags`. Clone the AGS project and follow the steps in README of folder `OSX`. You don't need Xcode, try `cmake` and `make` commands. After `make` is done, the `AGS.app/Contents/Resources` folder should have the following files:

```
acsetup.cfg
ags.icons
audio.vox
ENGV.tmp
French.tra
game.ags
German.tra
Spanish.tra
speech.vox
```

`ENGV.tmp` and `.tra` files need to be copied manually. I didn't replay the game to the end so I can't assure you it doesn't have any fatal bugs but looks fine. The only bug I encountered is the opening scene will hang at the second sentence, solution is hitting `ESC` to skip.

Port to Linux is easier. Using the pre-build engine from GitHub release or build it by yourself and give it `Primordia.exe`.

## Laggy terminal

An interesting phenomenon I noticed is that the terminal feels laggy when I enter commands in the AGS repo and Emacs is laggy too. In fact, neither zsh nor Emacs is slow, it's git! Try `git status` and you will know. Those huge game files should be tracked by git-lfs. The solution is to disable some git features of oh-my-zsh and Emacs.

## ...

Thanks to all these amazing people for their open source projects, I can still play this game and didn't get robbed. I have always believed that any software is deemed to be broken sooner or later if it doesn't receive any update. In my case, one week. No commercial company can survive forever but the community can. Therefore I regard selling executable files without an update guarantee longer than three years as robbery. I'm talking about you, Android! And DRM is just rape.

It's hard to imagine a developer can't control his game. The struggle of Wormwood Studios to upload their game reminds me an ironic story in *Cryptonomicon*(at the end of chapter Forays). Real life is much worse than the novel. Someone owns the code, someone owns the binary file and another one holds the title. After years of firm mergers even the owner doesn't realize they have the right. Part of the job of GOG is to deal with them, you can watch a GOG documentary filmed by Noclip on YouTube which shades some light on this mess.

## Links

- [Primordia (video game) - Wikipedia](https://en.wikipedia.org/wiki/Primordia_(video_game))

- [Wineskin: play your favorite Windows games on Mac OS X without needing Microsoft Windows](http://wineskin.urgesoftware.com/tiki-index.php)

- [wineskin-winery needs to be updated to run on 64-bit Mac OSX (Catalina+) · Issue #81292 · Homebrew/homebrew-cask · GitHub](https://github.com/Homebrew/homebrew-cask/issues/81292)

- [Adventure Game Studio - Wikipedia](https://en.wikipedia.org/wiki/Adventure_Game_Studio)

- [Deutsche Übersetzung \| German Translation, page 3 - Forum - GOG.com](https://www.gog.com/forum/primordia/deutsche_ubersetzung_german_translation)

- [Porting Adventure Game Studio Games to the Mac](http://www.edenwaith.com/blog/index.php?p=112)

- [Inno Setup - Wikipedia](https://en.wikipedia.org/wiki/Inno_Setup)

- [GitHub - dscharrer/innoextract: A tool to unpack installers created by Inno Setup](https://github.com/dscharrer/innoextract)

- [GitHub - adventuregamestudio/ags: AGS editor and engine source code](https://github.com/adventuregamestudio/ags)

- [oh-my-zsh slow, but only for certain Git repo - Stack Overflow](https://stackoverflow.com/questions/12765344/oh-my-zsh-slow-but-only-for-certain-git-repo)

- [Oh My Zsh hangs because of slow `git status` calls · Issue #9046 · ohmyzsh/ohmyzsh · GitHub](https://github.com/ohmyzsh/ohmyzsh/issues/9046)

- [Cryptonomicon - Wikipedia](https://en.wikipedia.org/wiki/Cryptonomicon)

- [GOG: Preserving Gaming's Past & Future - YouTube](https://www.youtube.com/watch?v=ffngZOB1U2A)
