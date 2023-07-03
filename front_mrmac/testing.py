from car_speed import evaluate_car_speed
def test_low_speed():
    assert evaluate_car_speed(30) == "Low"

def test_normal_speed():
    assert evaluate_car_speed(80) == "Normal"

def test_high_speed():
    assert evaluate_car_speed(150) == "High"

def test_very_high_speed():
    assert evaluate_car_speed(210) == "V.High"

def test_invalid_speed():
    assert evaluate_car_speed(-10) == "Invalid"
    assert evaluate_car_speed("abc") == "Invalid"