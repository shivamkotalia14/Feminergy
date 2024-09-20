import pandas as pd
import numpy as np 
import selenium
from selenium.webdriver.common.by import By
from selenium import webdriver
from selenium.webdriver.support.ui import Select
from selenium.webdriver.chrome.options import Options
import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service


     
class Plan:
    def __init__(self,cal=3000,meal=5):
        self.CAL = int(cal)
        self.MEALS = int(meal)
        if self.MEALS > 9:
            self.MEALS=9
        if self.MEALS < 1:
            self.MEALS = 1
        self.SITE = 'https://www.eatthismuch.com/'

    def doIt(self):
        options = webdriver.ChromeOptions()
        options.add_argument('--headless')
        options.add_argument('chromedriver --pythoog-level=OFF')
        options.add_argument('--disable-gpu')
        options.add_argument("--disable-logging")
        options.add_argument('log-level=3')
        service = Service()
        driver = webdriver.Chrome(service=service, options=options)
        # driver = webdriver.Chrome(executable_path=r"C:\Users\sangw\Downloads\chromedriver_win32\chromedriver.exe",options=options)
        # driver = webdriver.Chrome(executable_path=r"C:\Users\b51gh\Downloads\chromedriver-win64\chromedriver-win64\chromedriver.exe",options=options)
        driver.get(self.SITE)
        time.sleep(3)
        driver.find_element(By.ID, 'cal_input').send_keys(self.CAL)
        meal = Select(driver.find_element(By.ID,'num_meals_selector'))
        meal.select_by_visible_text(str(self.MEALS)+' meals')
        driver.find_element(By.CLASS_NAME,'btn.btn-lg.btn-block.btn-orange.gen_button').click()
        time.sleep(5)
        #driver.find_element_by_xpath('//button[contains(text(), "GENERATE")]').click()
        titles = ['Breakfast','Lunch','Dinner']
        #food_img = driver.find_elements_by_class_name('food_image')
        meals = driver.find_elements(By.CLASS_NAME,'meal_box.meal_container.row')
        i = 0
        ans = ""
        for mel in meals:
            #itle = mel.find_elements(By.CLASS_NAME,'col.text-dark-gray.text-large.text-strong.print_meal_title.wrap_or_truncate.pr-0')
            if i >= 3:
                break
            title = titles[i]
            i += 1
            totCal = mel.find_element(By.CLASS_NAME,'cal_amount.text-small.text-light-gray')
            print()
            ans += title + "</br>"
            print(title)
            ans += "Total Calories :" + totCal.text + "</br>"
            print('Total Calories :',totCal.text)
            foods = mel.find_elements(By.CLASS_NAME,'diet_draggable.ui-sortable-handle')
            for food in foods:
                info = food.get_attribute('outerHTML')
                #print(info)
                img = food.find_element(By.CLASS_NAME,'food_image')
                lnk = img.get_attribute('style')
                #print(lnk)
                lnk = lnk[lnk.index('\"')+1:]
                #print(lnk)
                lnk = lnk[:lnk.index('\"')]
                #print("IMAGE",lnk)
                #print('\n\n')
                name = food.find_element(By.CLASS_NAME,'print_name')
                ans += name.text + "</br>"
                print(name.text)
                amt = food.find_element(By.CLASS_NAME,'amount_input')
                serv = food.find_element(By.CLASS_NAME,'food_units_selector')
            ans += "</br>"
        return ans
                
