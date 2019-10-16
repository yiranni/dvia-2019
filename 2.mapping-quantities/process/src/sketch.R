library(ggplot2)
library(plotly)
data <- read.csv("data.csv", header=TRUE)
ggplot(data, aes(fill=data$country, y=data$test, x=data$year)) + 
  geom_bar(position="stack", stat="identity") + 
  ggtitle("Summary of A Thousand Suns")+
  xlab("Year")+
  ylab("Test")+
  scale_fill_discrete(name = "Country")+
  theme_bw()


ggplot(subset(data,data$country %in% c("United States" , "Russia"))) + 
  geom_line(aes(data$test, group=data$country, colour=data$country))

ggplot(subset(data,data$country %in% c("United States" , "Russia", "France")) ) + 
  geom_line(aes(year, tests, group=country, colour=country)) +
  ggtitle("Trend in Three Dominant Countries")

df_neg <- data
index <- df_neg$location == 'underground'
df_neg$tests[index] <- -(df_neg$tests[index])
ggplot(df_neg, aes(fill=df_neg$country, y=df_neg$test, x=df_neg$year)) + 
  geom_bar(position="stack", stat="identity") + 
  ggtitle("Aboveground Vs. Underground")+
  xlab("Year")+
  ylab("Test")+
  scale_fill_discrete(name = "Country")+
  theme_bw()


