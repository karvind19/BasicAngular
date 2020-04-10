@MP-50 @UI @TOCAdmin @OpDataMaintenance @TISUserAccount @NewAccount @LanguageCode9
Scenario: Add new TIS User Account setting mandatory and default values_MP50
	Given I am a TOC Administrator
	When I add a new TIS User Account using the following information:
		| UserID | OperID | FirstName | LastName | Password | UserType  | TISRoleCode | TISRoleDescr    | MNL_PRC_AUTH | LANG_CD |
		| 9876   | 9876   | Fred      | Bloggs   | 0000     | 4         | 1024        | Mobile Operator | 0            | 9       |
	And the valid TOC Codes are:
		| TocCode | TocName             |
		| AW      | Transport for Wales |
		| SR      | ScotRail            |
		| XC      | Cross Country       |
		| CH      | Chiltern            |
		| GA      | Greater Anglia      |
		| NR      | Northern Rail       |
	Then the TIS User has the name Fred Bloggs
	And a User ID of 9876
	And a Password of 0000
	And a TIS Role Code of 1024 for a Mobile Operator
	And an Operator ID of 9876 which is the same as the UserID
	And a User Type of 4 for a Live User as this is the default value
	And the Manual Price Authorisation flag has a value of 0 as this is the default value
	And the language code has a value of 9 as this is the default for UK English
	And the TOC Code shows the value selected


@MP-50 @UI @TOCAdmin @OpDataMaintenance @TISUserAccount @NewAccount
Scenario outline: Add new TIS User Account with many test examples_MP50
	Given I am a TOC Administrator
	When I want to add a new TIS User Account with <UserID> as the TIS User logon ID
	And the <OperID> has the same value as the User ID
	And the user <FirstName> is their given name
	And the user <LastName> is their surname
	And the user <Password> is the default password for the TOC
	And the <UserType> is the default
	And the <TISRole> is set to be 1024
	And the <MNL_PRC_AUTH> has the default value
	And the <LANG_CD> has the default value
	And I select one of the valid TOC Codes:
		| TocCode | TocName             |
		| AW      | Transport for Wales |
		| SR      | ScotRail            |
		| XC      | Cross Country       |
		| CH      | Chiltern            |
		| GA      | Greater Anglia      |
		| NR      | Northern Rail       |
	Then I see that the TIS User ID is this <UserID>
	And the Operator ID has the same value as the <UserID>
	And I see that the TIS User first name is this <FirstName>
	And I see that the TIS User last name is this <LastName>
	And the a TIS User password is <Password>
	And the <UserType> is that of a Live User
	And the <TISRoleCode> of 1024 for a Mobile Operator
	And I see a role description of <TISRoleDescr>
	And the Manual Price Authorisation flag has a default value of <MNL_PRC_AUTH>
	And the language code has a default value of <LANG_CD>
	And I see the <TocCode> shows the value selected and is from the list
Examples:
		| UserID | OperID | FirstName | LastName | Password | UserType  | TISRoleCode | TISRoleDescr    | MNL_PRC_AUTH | LANG_CD |
		| 9      | 9      | Fredo     | Bloggs   | 0000     | 4         | 1024        | Mobile Operator | 0            | 9       | # single digit user ID
		| 88     | 88     | Freda     | Bloggs   | 0000     | 4         | 1024        | Mobile Operator | 0            | 9       | # two digit user ID
		| 777    | 777    | Freddy    | Bloggs   | 0000     | 4         | 1024        | Mobile Operator | 0            | 9       | # three digit user ID
		| 6666   | 9876   | Freddie   | Bloggs   | 0000     | 4         | 1024        | Mobile Operator | 0            | 9       | # four digit user ID
		|        | 9876   | Frederick | Bloggs   | 0000     | 4         | 1024        | Mobile Operator | 0            | 9       | # no user ID
		| 1234   | 1234   |           | Bloggs   | 0000     | 4         | 1024        | Mobile Operator | 0            | 9       | # no first name
		| 12345  | 12345  | Frederica |          | 0000     | 4         | 1024        | Mobile Operator | 0            | 9       | # no last name
		| 123456 | 123456 | Fred      | BloggsJr |          | 4         | 1024        | Mobile Operator | 0            | 9       | # no password
		| 0065   | 0065   | FredJr    | Bloggs   | 0000     |           | 1024        | Mobile Operator | 0            | 9       | # no user type
		| 65     | 65     | FredJoe   | Bloggs   | 0000     | 4         |             | Mobile Operator | 0            | 9       | # no role code
		|  908   |  908   | Fred      | Bloggsta | 0000     | 4         | 1024        | Mobile Operator |              | 9       | # no manual price authorisation
		| 980    | 980    | Fred      | Blogger  | 0000     | 4         | 1024        | Mobile Operator | 0            |         | # no language code
