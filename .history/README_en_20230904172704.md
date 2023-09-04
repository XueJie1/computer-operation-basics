This document was translated by ChatGPT.

[中文文档](./README.md)

# 💩 Mountain Warning!
Issues with this project (including but not limited to):
* Non-standard naming
* Excessive code reuse (e.g., `<header>`, `<footer>`, and JavaScript)

# What Is This?
This is one of the tasks for the Computer Operations Internship in the second semester of the sophomore year at the School of Information Technology, Hebei University of Science and Technology: creating a themed website.

# Internship Course Requirements
The following requirements are from the internship course:
## Task Selection
* Choose a theme and develop around it, with each person responsible for a module.
* For example: "Charm of Hebei" could be divided into different regions or specialties.

    Traditional festivals: Spring Festival, Lantern Festival, Mid-Autumn Festival, etc.

## Requirements
* There is a workload requirement: each person's pages should not be less than 10 (less than 10 is considered failing).
* Design content requirements: the website theme should be positive and not allow illegal content or games.
* Web page link requirements: each webpage should be accessible and should be able to return to or connect to the homepage; it should not be possible to access other web pages through the browser's back button.
* Webpage design requirements: content on webpages should be well-structured; simply adding text and images without control is not acceptable.
* HTML tags should be applied as much as possible, not less than 10 types.

## Tool Selection
Dreamweaver (recommended), Visual Studio, Visual Studio Code, WebStorm, or other self-selected tools.

# Instructions for Other Team Members
What to do: Just "fill in" at `/pages/festival_name/page_name.html`.

`page_name` is one of `cuisine.html`, `customs.html`, `history.html`, `introduction.html`, or `legend.html`, excluding something like `qixifestival.html` because it's already done.

Start by [learning some HTML knowledge](https://www.runoob.com/html/html-basic.html):

`<h1>Put your first-level title here</h1>`

`<h2>Put your second-level title here</h2>`

`<h3>Put your third-level title here</h3>`

`<p>Put a paragraph of text here</p>`

## Conventions
### Headings and Paragraphs
We agree that the second-level heading `<h2></h2>` is used for major titles, the third-level heading `<h3></h3>` is used for subheadings, and `<p></p>` is used for paragraphs of text.

### Images
```
<div class="img">
    <img src="image_location">
</div>
```
Copy and paste the above code into the location where you want to insert an image, replacing "image_location" in the code with the local path ([learn relative paths](https://www.redhat.com/sysadmin/linux-path-absolute-relative)) or an HTTP link (e.g., http://www.google.cn/intl/zh-CN_cn/landing/cnexp/google-search.png, not recommended as it won't display without an internet connection).