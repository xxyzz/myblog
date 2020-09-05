---
layout: post
title: "Port Primordia to Mac"
date: 2020-09-05
description: "Port Primordia to macOS Catalina."
---

When I first played Primordia, that was before the language update and one week before macOS dropped support of 32-bit apps. I couldn't run it and the GOG support told me how to load the game with Wineskin. Now I can't play the updated game nor the old game because only Windows installer get updated and Wineskin has not been updated sine 2012. Err. Luckily, I found that I can build the game and run it without Wine.

Primordia is based on Adventure Game Studio(AGS), which is an open source game engine and it supports macOS. Maybe the publisher \*bleep\* it up, this game should be working on Linux and macOS. What we need to do is extracting game files from the Windows installer and building a 64-bit app, kind like a ScummVM game.

## Extract installer

GOG uses Inno Setup to pack their Windows installers, which is also open sourced. There are some nice people build a tool called innoextract to unpack these installers. You can install it with Homebrew.

## Build app

Clone the AGS code. Follow the build steps in the README of folder `OSX`. You don't need Xcode, try `cmake` and `make` commands. After these commands completed, the `AGS.app/Contents/Resources` folder should have the following files:

```
acsetup.cfg
ags.icons
audio.vox
ENGV.tmp
game.ags
speech.vox
```

The `ENGV.tmp` file needs to be copied manually, `make` won't copy it. Then you can enjoy the game. I didn't finish the game so I don't know if it has any bugs or not but looks fine. The only bug I encountered is the opening scene will hang at the second sentence, solution is hitting `ESC` to skip.

## Laggy terminal

An interesting phenomenon I noticed is that the terminal feels laggy when I `cd` to the `ags` folder and Emacs is laggy too. In fact, neither zsh nor Emacs is slow, it's git! Try `git status` and you will know. Those huge game files should be tracked by git-lfs. The solution is to disable some git features of oh-my-zsh and Emacs.

## ...

Thanks to all these amazing people for their open source projects, I can still play this game and didn't get robbed. I have always believed that if a software is not get updated, it's deemed to be broken sooner or later. In my case, one week. No commercial company can survive forever but the community can. Therefore I regard selling software without any update as robbery. I'm talking about you, Android! And DRM is just rape.

It's hard to imagine the developer of a product can't control it. The struggle of Wormwood Studios to push their patch reminds me a funny story in *Cryptonomicon*: Randy wrote a game and Avid wanted to buy it but Andrew thought he has the right of the game and sued Randy. Then the university said they also hold the right of the game because Randy developed the game on the university's computer. The real life game industry is much messier then this. Part of the job of GOG is to deal with them, you can watch a documentary filmed by Noclip about that.

## Links

- [Primordia (video game) - Wikipedia](https://en.wikipedia.org/wiki/Primordia_(video_game))

- [wineskin-winery needs to be updated to run on 64-bit Mac OSX (Catalina+) · Issue #81292 · Homebrew/homebrew-cask](https://github.com/Homebrew/homebrew-cask/issues/81292)

- [Adventure Game Studio - Wikipedia](https://en.wikipedia.org/wiki/Adventure_Game_Studio)

- [Deutsche Übersetzung \| German Translation, page 2 - Forum - GOG.com](https://www.gog.com/forum/primordia/deutsche_ubersetzung_german_translation)

- [Porting Adventure Game Studio Games to the Mac](http://www.edenwaith.com/blog/index.php?p=112)

- [Inno Setup - Wikipedia](https://en.wikipedia.org/wiki/Inno_Setup)

- [dscharrer/innoextract: A tool to unpack installers created by Inno Setup](https://github.com/dscharrer/innoextract)

- [adventuregamestudio/ags: AGS editor and engine source code](https://github.com/adventuregamestudio/ags)

- [oh-my-zsh slow, but only for certain Git repo - Stack Overflow](https://stackoverflow.com/questions/12765344/oh-my-zsh-slow-but-only-for-certain-git-repo)

- [Oh My Zsh hangs because of slow `git status` calls · Issue #9046 · ohmyzsh/ohmyzsh · GitHub](https://github.com/ohmyzsh/ohmyzsh/issues/9046)

- [Cryptonomicon - Wikipedia](https://en.wikipedia.org/wiki/Cryptonomicon)

- [GOG: Preserving Gaming's Past & Future - YouTube](https://www.youtube.com/watch?v=ffngZOB1U2A)
