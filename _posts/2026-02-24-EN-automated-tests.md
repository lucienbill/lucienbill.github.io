---
layout: post
title: "About automating software tests"
excerpt_separator: <!--more-->
lang: "en"
---

## Foreword

You want to automate software testing: cool!
It's probably a good idea, but there are about 99 ways to do it wrong.

First of all, you don't actually want to automate tests, this is not your end goal.
You want to automate to serve a specific purpose, and you should only automate some of your tests.

In the hopes it might help, I hereby share my experiences and some advice.

<!--more-->

As I am writing this, my current job is at a company that sells software testing automation: I have a bias, and a direct incentive to convince you to automate.

It's also worth mentioning that nothing I write here is based on any kind of academic study.
It is all based on my own imperfect experience.
In other words: let's keep in mind that me declaring something with confidence doesn't necessarily means I'm right.

## Let's set the scene

How about we start with a story?

The Bananatronic Company (it obviously sells virtual connected bananas) wants to automate their tests. 
This is what they do:

They quickly assemble a team of 10 people and get them a piece of automation software that works well.

The infrastructure is not ready, the environment in the Bananatronic context is quite complex to manage.
But the 10 people have already been hired, they are ready, so they might as well be busy: they set-up a parallel infrastructure, some sort of simplified clone of the target infrastructure.

The fantastic 10 have one objective: take as many test cases from the existing test base and automate as many as they can.

Time passes on and eventually the target environment is ready.
That's handy, because about 80% of the test are automated already!
Thanks to their very technical framework, the team is confident in the scripts.

So the tests are delivered onto the environment and... Nothing works.

If this story sounds familiar, it might be because it was inspired by real situations.

## But, what have we messed up?

Short answer: a bit of everything.

- First, we started very big: 10 people at full speed right away
- Then a very long feedback loop was used: nothing was tested against the target environment until there were many scripts to deliver
- And most of all: we believed we could replace manual test cases with automated ones.

Let's present another way of doing things.

## What I like to do

### Start with a small team

I like to start automation projects with a small team, ideally 2 people.

I have gone solo for this kind of missions and I don't recommend it: when I am alone, who can help be make the right calls?
Who can ask questions about what I do?
These questions lead to the search for purpose, they help to avoid cobbling a flaky technical implementation, or one that just doesn't fit the business needs.

On the opposite side of the spectrum, starting with too big of a team dilutes responsibility and initiatives.
When I am whith 9 strangers, who leads the show ?
According to which criteria?
Will I spend my energy trying to improve how we work, of will I follow a vague majority and blend in to favor corporate survival?

A team starting at 2 people seems like a good trade-off.
As the team is breaking in, it will know when it will be ready to welcome a third person, then an fourth etc.

What I really like about starting small is how easy it is to operate on consensus rather than on hierarchy - to use a horizontal organisation rather than a vertical one.
In the field of software quality engineering, it is an effective way to prevent great ideas from behind squashed by the weight of authority.


### Start small

We can script everything in a sandbox and deliver one big package on the testing environment once we're done.

It doesn't work and we know it.
For instance: code a script in one go and run it only once you're done, there is no chance that it behaves like you intend it to!

My thinking is similar about big frameworks, more on that later.

In short: take a few test cases and find a way to automate them that makes sense in your context.
Figure out how to organise your code in a way that fits your needs.
Then get more tests in, discover and fix problems as they arise.

Rince and repeat, regularly question your needs and hypotheses, and it will get better.

### Not all manual tests can be automated

A person is intelligent, a test robot isn't.

When asked to perform a series of actions against an app, you can check whether the flow makes sense, whether the user interface (UI) complies with the graphic mock-up or a predefined layout, and you can judge the quality of the user experience (UX).

The robot, on the other hand, only does what it's told.
This works wonders to assert that a sequence of actions leads to some effect, such as "fill the forms, then check that some data is written in the system".
It can require more effort to get the robot the check the consistence of a UI layout: I usually keep such tasks for later, once the easy parts are taken care of and the team has a deeper understanding of the system.
And: the robot will not check what it hasn't been asked to check.

So when I automate a manual test case I tend to replace it with:
- An automated test that checks the workflow. Ideally something quick to set-up, easy to perform for a robot but annoying for people (think "assert that some numbers on a table comply with a mathematic formula")
- A simpler manual test case that focuses on UX, graphical user interface, or exploration

Also, I am fine with having one automated test replacing portions of several manual test cases - one test can cover more than one requirement.
It is a way to optimize test execution time, provided an efficient system is used to link tests to requirements.

To summarize: the sequence of instructions written in a manual test case isn't necessarily the one that gets automated.

Because a test case does not exist in a vacuum.
A set of test cases must be the answer to the question "how can I verify whether the tested app complies with this requirement (business rule)?"

Note: because I tend to change things when I turn a manual test case into a script, I validate this change with coworkers.
Having no one "testing" my tests is a problem.

### Simple test cases

I often see complex scripts with convoluted logic branches, and sometimes polymorphism.

When I automate test I don't like complex frameworks, and the less I fiddle with object oriented programming the better.
My role as a tester is first and foremost to check whether the tested app fits the business needs, I become frustrated when I feel like I spend too much time on technical aspects.

And please remember that you do not want to re-implement the logic of the tested application, you just want to make testing it easier.

### New test cases
It is Prime time: a new feature is being written, and it comes with new requirements and updates to some existing ones.
While developers analyze the changes and start thinking about how to implement them, you also analyse them and with your critical perspective:
- Do they make sense?
- How can they be tested?

This is where you can start to describe what your automated tests must verify.
Even though development hasn't even started, you can get an idea of which test will be automated and which ones won't, and of what purpose they will each serve.

## Conclusion

I'm stopping here, this is already quite a long post.
I could have added more examples but my goal isn't really to convince anyone here.
Rather, I wanted to share a summary of my vision.

It is nothing groundbreaking, it partially leans on a concept that isn't exactly new but is still woefully misunderstood: agility.

Please also note that if you recognize yourself in some of the practices I tend to avoid, it isn't a big deal.
They might actually be relevant to your context.

If this post sparks some reflections and make you ask questions, then I'm satisfied.

If it triggers a will to change some of your habits this is cool too, though I would encourage you to avoid changing everything all at once.
Keep a moderate pace and rely on teamwork.