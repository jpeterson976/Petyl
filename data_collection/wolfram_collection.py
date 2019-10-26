from wolframclient.evaluation import WolframLanguageSession
from wolframclient.language import wl, wlexpr
session = WolframLanguageSession()


# Grab the states
print(session.evaluate('Interpreter["Plant"]["Tulip"]["StateList"]'))

# Does it occur locally?
# print(session.evaluate('Interpreter["Plant"]["Tulip"]["LocalOccurrence"]'))


#sun expo, time of year, annual or periannual, water requirements

# Tulip, Sunflower, Rose, Daisy, Dandelion
# Bee, Hummingbird, Butterfly

# Plants
# - States (includes local occurence)
# - Bloom Period (annual or periannual)
# - Active Growth Period (time of year)
# - Growth rate 
# - Growth requirements
# - Lifespan
# - Water requirements
# - Temperature range
# - Sun exposure

