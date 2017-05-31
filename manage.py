#!/usr/bin/env python
'''
An automated crypto-currency trading bot that hooks into the poloniex exchange.
'''
import os
import sys

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "project.settings")

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
