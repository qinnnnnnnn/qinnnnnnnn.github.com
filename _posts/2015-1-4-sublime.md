---
layout: default
title: sublime
comments: true
---
# sublime tips

{{ page.date | date_to_string }}

####package control 组件安装（Ctrl+`）：

- sublime text 2:

```
import urllib2,os; pf='Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler( ))); open( os.path.join( ipp, pf), 'wb' ).write( urllib2.urlopen( 'http://sublime.wbond.net/' +pf.replace( ' ','%20' )).read()); print( 'Please restart Sublime Text to finish installation')
```

- sublime text 3:

```
import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())
```


####用Package Control安装插件的方法：

```
按下Ctrl+Shift+P调出命令面板

输入install 调出 Install Package 选项并回车，然后在列表中选中要安装的插件。
```


####插件

1、HTML-CSS-JS Prettify  快捷键Ctrl+Shift+H

2、jsFormat

3、emmet  快速编程

4、FileDiffs 比较两个文件内容或者代码片段的不同

5、Bracket​Highlighter 括号高亮匹配

6、ColorPicker 跨平台取色器插件

7、Prefixr CSS可自动添加 -webkit 等私有词缀 快捷键Ctrl+Alt+X

8、SublimeCodeIntel 代码提示

9、语法支持

Stylus 高亮

Jade 高亮

jQuery 代码提示

####快捷键

Ctrl+Shift+P：打开命令面板

Ctrl+P：搜索项目中的文件

Ctrl+G：跳转到第几行

Ctrl+W：关闭当前打开文件

Ctrl+Shift+W：关闭所有打开文件

Ctrl+Shift+V：粘贴并格式化

Ctrl+D：选择单词，重复可增加选择下一个相同的单词

Ctrl+L：选择行，重复可依次增加选择下一行

Ctrl+Shift+L：选择多行

Ctrl+Shift+Enter：在当前行前插入新行

Ctrl+X：删除当前行

Ctrl+M：跳转到对应括号

Ctrl+U：软撤销，撤销光标位置

Ctrl+J：选择标签内容

Ctrl+F：查找内容

Ctrl+Shift+F：查找并替换

Ctrl+H：替换

Ctrl+R：前往 method

Ctrl+N：新建窗口

Ctrl+K+B：开关侧栏

Ctrl+Shift+M：选中当前括号内容，重复可选着括号本身

Ctrl+F2：设置/删除标记

Ctrl+/：注释当前行

Ctrl+Shift+/：当前位置插入注释

Ctrl+Alt+/：块注释，并Focus到首行，写注释说明用的

Ctrl+Shift+A：选择当前标签前后，修改标签用的

F11：全屏

Shift+F11：全屏免打扰模式，只编辑当前文件

Alt+F3：选择所有相同的词

Alt+.：闭合标签

Alt+Shift+数字：分屏显示

Alt+数字：切换打开第N个文件

Shift+右键拖动：光标多不，用来更改或插入列内容

鼠标的前进后退键可切换Tab文件

按Ctrl，依次点击或选取，可需要编辑的多个位置

按Ctrl+Shift+上下键，可替换行

####theme

- Seti_UI

Settings:

```
{
  "theme": "Seti.sublime-theme",
  "color_scheme": "Packages/Seti_UI/Scheme/Seti.tmTheme",
}
```

Options:

```
{
  "Seti_mouse_wheel_tabswitch": true,     // allow tab switching with mouse wheel

  "Seti_no_bar_undertabs": true,          // remove the 4px bar under the tabs
  "Seti_tabs_small": true,                // tabs height = 35
  "Seti_tabs_med": true,                  // tabs height = 40

  "Seti_ClosedFolder_same": true,         // same icon as the Opened_folder
  "Seti_ClosedFolder_remove": true,       // remove closed_folder icon
  "Seti_ClosedFolder_dots": true,         // change closed_folder icon to dot

  "Seti_SB_med": true,                    // scrollbars width / height = 6
  "Seti_SB_big": true,                    // scrollbars width / height = 10
  "Seti_SB_bright": true,                 // brighter color for scrollbars

  "Seti_sb_small_padding": true,          // sidebar entries padding = 3
  "Seti_sb_big_padding": true,            // sidebar entries padding = 10
}
```

- Theme - Centurion
Settings:

```
"theme": "Centurion.sublime-theme"
```

