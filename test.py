import mechanize
features = ["nausea", "Sweating"]

def findFeatures():
    br = mechanize.Browser()
    br.open("https://www.statmed.org/differential_diagnosis").get_data()
    "feature-text"
    print(br)



if __name__ == "__main__":
    findFeatures()


