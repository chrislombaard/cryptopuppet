#!/usr/bin/python

"""
Setup for cryptopuppet
"""

# https://packaging.python.org/en/latest/distributing.html
# https://github.com/pypa/sampleproject

import re
from codecs import open

from setuptools import find_packages, setup


def get_version(fname):
    """
    Extracts __version__ from {fname}
    """
    verstrline = open(fname, "rt").read()
    mob = re.search(r"^__version__ = ['\"]([^'\"]*)['\"]", verstrline, re.M)
    if mob:
        return mob.group(1)
    else:
        raise RuntimeError("Unable to find version string in %s." % (fname,))


def get_requirements(fname):
    """
    Extracts requirements from requirements-file <fname>
    """
    reqs = open(fname, "rt").read().strip("\r").split("\n")
    requirements = [
        req for req in reqs
        if req and not req.startswith("#") and not req.startswith("--")
    ]
    return requirements


setup(
    name="cryptopuppet",
    version="0.0.dev0",
    description="An automated crypto-currency trading bot that hooks into the poloniex exchange."
                "It was born to make profit.",
    long_description=open('README.rst', 'r').read(),
    author="Chris Lombaard",
    author_email="chrislombaard@gmail.com",
    license="MIT",
    url="https://github.com/chrislombaard/cryptopuppet",
    packages=find_packages(),
    install_requires=[
        # Handled by requirements file
    ],
    include_package_data=True,
    tests_require=[
        "tox"
    ],
    classifiers=[
        "Programming Language :: Python",
        "License :: OSI Approved :: BSD License",
        "Operating System :: OS Independent",
        "Framework :: Django",
        "Intended Audience :: Developers",
        "Topic :: Internet :: WWW/HTTP :: Dynamic Content",
    ],
    zip_safe=False,
)
