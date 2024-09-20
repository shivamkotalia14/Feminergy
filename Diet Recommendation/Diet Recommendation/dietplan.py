from Plan import Plan
#calorie requirement by Mifflin – St Jeor Formula
def dietRecommend(age, gender, weight, height, lifestyle, need):
    ex = [gender, height, weight]
    if gender=="male" or gender == "Male" or gender == "M":
        bmr=10*weight+6.25*height-5*age+5
        ex[0] = 0
    else:
        ex[0] = 1
        bmr=10*weight+6.25*height-5*age-161

    if lifestyle == "Sedentary":
        cal = bmr*1.2
    elif lifestyle == "Lightly Active":
        cal = bmr*1.375
    elif lifestyle == "Moderately Active":
        cal = bmr*1.55
    elif lifestyle == "Very Active":
        cal = bmr*1.725
    else: #extra active
        cal = bmr*1.9

    if need == "Lose Weight":
        cal = cal-(0.2*cal)
    elif need == "Gain Weight":
        cal = cal+300
    cal = int(cal)
    meals = 3
    #model = joblib.load('diet.pkl')
    ob=Plan(cal,meals)
    return ob.doIt()
    

def test_fun(age, gender, weight, height, lifestyle, need):
    return "This test function has been executed"

#print(dietRecommend(5, "male", 50, 23, "Sedentary", "maintain weight"))
